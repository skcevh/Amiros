const DOMAIN = 'amiros.be'; // Your Mailgun domain
const API_KEY_Encrypted = 'U2FsdGVkX1/WOH6uPgN5C+fesoupXFxldVoDhfubexIpYYiiZTSrkVi/Isv8G/bBLlnBbLDjI39pw7zvbGBrFH90lSSiUYDL0WKcv9qoyuk='; // Your Mailgun API key

const CIMBRA_DOMAIN = 'cimbra.be'; // Your Mailgun domain
const CIMBRA_API_KEY = 'U2FsdGVkX19sQU7FB5IUWLa1EWG99sa5Mnx3+JcmbW0QUJbYmZJ63wdDvFMOkMgrpV0qcvAb5JABhge/PV3hnmuDI4GWu83CiboRXse5v6c='; // Your Mailgun API key


const secretKey = "ZW9sP241TtiqQwFC1RQj"; // Zorg dat je een sterke sleutel gebruikt!


// Functie om een string te versleutelen
function encryptString(plainText) {
    return CryptoJS.AES.encrypt(plainText, secretKey).toString();
}

// Functie om een string te ontsleutelen
function decryptString(cipherText) {
    const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}

async function sendLeadMail(mailTo) {
  const formData = new FormData();
  formData.append('from', 'info@amiros.be');
  formData.append('to', mailTo);
  formData.append('subject', 'Amiros - welkom!');
  formData.append('template', 'amiros lead');
  
  var decryptedAPIKey = decryptString(API_KEY_Encrypted);


  try {
    const response = await fetch(`https://api.eu.mailgun.net/v3/${DOMAIN}/messages`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${btoa(`api:${decryptedAPIKey}`)}`
      },
      body: formData
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error('Error sending email:', errorResponse);
      throw errorResponse;
      
    }

    const responseData = await response.json();
    console.log('Email sent successfully:', responseData);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}





async function sendFlowerMail(mailTo) {
  const formData = new FormData();
  formData.append('from', 'info@cimbra.be');
  formData.append('to', mailTo);
  formData.append('subject', 'Samenwerken voor de verkoop van chrysanten voor 1 November?');
  formData.append('template', 'chrysantenverkoop');
  
  var decryptedAPIKey = decryptString(CIMBRA_API_KEY);

  try {
    const response = await fetch(`https://api.eu.mailgun.net/v3/${CIMBRA_DOMAIN}/messages`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${btoa(`api:${decryptedAPIKey}`)}`
      },
      body: formData
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error('Error sending email:', errorResponse);
      throw errorResponse;
      
    }

    const responseData = await response.json();
    console.log('Email sent successfully:', responseData);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}



async function sendTextMail(mailTo, subject, message) {
  const formData = new FormData();
  formData.append('from', 'info@amiros.be');
  formData.append('to', mailTo);
  formData.append('subject', subject);
  formData.append('html', message);
  
  var decryptedAPIKey = decryptString(API_KEY_Encrypted);


  try {
    const response = await fetch(`https://api.eu.mailgun.net/v3/${DOMAIN}/messages`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${btoa(`api:${decryptedAPIKey}`)}`
      },
      body: formData
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error('Error sending email:', errorResponse);
      throw errorResponse;
      
    }

    const responseData = await response.json();
    console.log('Email sent successfully:', responseData);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}








async function sendEmail(to, from, subject, text, isHtml) {
  const formData = new FormData();
  formData.append('from', 'mailservice@amiros.be');
  formData.append('to', 'ceschool@gmail.com');
  formData.append('subject', subject);
  formData.append('text', text);

  if(isHtml){
    formData.append('html', text);
  }
  
  try {
    var decryptedAPIKey = decryptString(API_KEY_Encrypted);

    const response = await fetch(`https://api.eu.mailgun.net/v3/${DOMAIN}/messages`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${btoa(`api:${decryptedAPIKey}`)}`
      },
      body: formData
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error('Error sending email:', errorResponse);
      throw errorResponse;
    }

    const responseData = await response.json();
    console.log('Email sent successfully:', responseData);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}




function prepareMail(parent){
    var to = "info@amiros.be";
        var from = parent.find("#your_email").val();
        var phoneNumber = parent.find("#phone_number").val();
        var subject = parent.find("#subject").val();
        var text = parent.find("#message").val();
        var name = parent.find("#your_name").val();

        var message = "From: " + from + "<br />" +
            "Subject: " + subject + "<br />" +
            "Phone: " + phoneNumber + "<br />" +
            "Name: " + name + "<br />" +
            "Text: " + text;

        sendEmail(to, from, subject, message, true).then((sentMail) => {
            if (sentMail) {
                output = '<div class="alert-success" style="padding:10px 15px; margin-bottom:30px;">Mail werd verstuurd, we contacteren u zo snel mogelijk.</div>';
                parent.find("#result").hide().html(output).slideDown();
            
    
                parent.find(".contact_btn i").addClass('d-none');
            }else{
                output = '<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">Er ging iets mis.</div>';
                parent.find("#result").hide().html(output).slideDown();
                
                parent.find(".contact_btn i").addClass('d-none');
            }
          });
}




//contact us form
$(".contact_btn").on('click', function () {
    var el = $(this);
    var parent = el.closest(".contact-form");

    parent.find(".contact_btn i").removeClass('d-none');

    //simple validation at client's end
    var post_data, output;
    var proceed = "true";
    // var allBlank;

    var str = parent.find('#contact-form-data').serializeArray();

    parent.find('#contact-form-data input').each(function() {
        if(!$(this).val()){
            // alert('Some fields are empty');
            proceed = "false";
        }
    });

    //everything looks good! proceed...
    if (proceed === "true") {
      prepareMail(parent);
    }
    else
    {
        if (parent.find("#result").length) {
            // alert("yes");
            output = '<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">Gelieve alle velden in te vullen.</div>';
            parent.find("#result").hide().html(output).slideDown();
            parent.find(".contact_btn i").addClass('d-none');
        }else{
            Swal.fire({
                icon: 'error',
                type: 'error',
                title: 'Oops...',
                html: '<div class="text-danger">Gelieve alle velden in te vullen.</div>'
            })
            parent.find(".contact_btn i").addClass('d-none');
        }
    }
});