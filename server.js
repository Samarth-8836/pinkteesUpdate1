const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const nodemailer = require('nodemailer');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'inr',
    receipt_email: req.body.token.email 
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'mailerpinktees@gmail.com',
          pass: 'PinkTees@123'
        }
      });

      var fullText = (ar) => {
        var str = '';
        for (var i = 0, len = ar.length; i < len; i++) {
          str += (i+1) + ". " + ar[i].title + " \n\t " + "Quantity: " + ar[i].quantity + ' \n\t' + " Color: " + ar[i].selectedColor + ' \n\t' + " Size: " + ar[i].selectedSize + "\n";
        }
        return str;
      }

      var mailOptions = {
        from: 'mailerpinktees@gmail.com',
        to: 'mailerpinktees@gmail.com',
        subject: `Order - ${req.body.token.email}`,
        text: `${fullText(req.body.cartItems)} Address: ${req.body.token.card.address_line1}, ${req.body.token.card.address_city}, ${req.body.token.card.address_zip}, ${req.body.token.card.address_country}`
      };

      transporter.sendMail(mailOptions, function(err,info){
        if(err) {
          console.log(err);
        }
        else {
          console.log('mail sent: ' + info.response);
        }
      });



      res.status(200).send({ success: stripeRes });
    }
  });
}); 