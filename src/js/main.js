let navOpen = false;



$(document).ready(function () {
    function isMobile() {
        return window.innerWidth <= 767;
    }

    
    setTimeout(function () {
        if(!isMobile()){
            document.querySelector('.nav-trigger')?.click();

            navOpen = true;
        }
    }, 300);

    
    $(window).on('scroll', function () {
        function isMobile() {
            return window.innerWidth <= 767;
        }

        const scrollTop = $(this).scrollTop();

        var isMobile = isMobile();

        console.log('mobile', isMobile);

        if (!isMobile && scrollTop > 500 && navOpen) {
            document.querySelector('.nav-trigger')?.click();

            navOpen = false; 
        }else if(!isMobile && scrollTop < 500 && !navOpen){
            document.querySelector('.nav-trigger')?.click();
            
            navOpen = true;
        }
    });

    $(".back-to-top").click(function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    $('#clients-slider').on('click', function () {
        $(this).data('sliderPro').nextSlide();
    });

    document.querySelectorAll('.has-dropdown').forEach(item => {
        const dropdown = item.querySelector('.dropdown');

        item.addEventListener('mouseenter', () => {
            // reset eerst
            dropdown.style.left = '';
            dropdown.style.right = '';

            const rect = dropdown.getBoundingClientRect();
            const viewportWidth = window.innerWidth;

            // overflow rechts
            if (rect.right > viewportWidth - 10) {
                const overflowRight = rect.right - viewportWidth + 10;

                dropdown.style.left = `calc(0px - ${overflowRight}px)`;
            }

            // overflow links (edge case)
            if (rect.left < 10) {
                const overflowLeft = 10 - rect.left;

                dropdown.style.left = `${overflowLeft}px`;
            }
        });
    });

    $(".news-item").click(function () {
        $(".news-item").removeAttr("open");

        var el = $(this);

        var parent;
        if (el.hasClass(".news-item")) {
            parent = el;
        } else {
            $(this).closest(".news-item");;
        }

        parent.attr("open", "true");
    });

});

document.addEventListener("DOMContentLoaded", function () {
            const searchInput = document.getElementById("faqSearch");
            const clearButton = document.getElementById("faqClear");
            const faqItems = Array.from(document.querySelectorAll(".faq-item"));
            const sections = Array.from(document.querySelectorAll(".faq-section"));
            const noResults = document.getElementById("faqNoResults");
            const countText = document.getElementById("faqCountText");

            if(searchInput == null){
                return;
            }

            function normalize(text) {
                return text
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "");
            }

            function escapeRegExp(string) {
                return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            }

            function removeHighlights(container) {
                container.querySelectorAll("mark").forEach(mark => {
                    const textNode = document.createTextNode(mark.textContent);
                    mark.replaceWith(textNode);
                });
                container.normalize();
            }

            function highlightText(container, searchTerm) {
                if (!searchTerm || searchTerm.length < 2) return;

                const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false);
                const textNodes = [];

                while (walker.nextNode()) {
                    const node = walker.currentNode;
                    if (node.nodeValue.trim().length > 0) {
                        textNodes.push(node);
                    }
                }

                textNodes.forEach(node => {
                    const originalText = node.nodeValue;
                    const normalizedText = normalize(originalText);
                    const normalizedSearch = normalize(searchTerm);

                    const index = normalizedText.indexOf(normalizedSearch);
                    if (index === -1) return;

                    const range = document.createRange();
                    const start = index;
                    const end = index + searchTerm.length;

                    try {
                        range.setStart(node, start);
                        range.setEnd(node, Math.min(end, originalText.length));

                        const mark = document.createElement("mark");
                        range.surroundContents(mark);
                    } catch (e) {
                        // niets doen
                    }
                });
            }

            function updateCount(visibleCount) {
                if (visibleCount === 1) {
                    countText.innerHTML = "<strong>1</strong> vraag gevonden";
                } else {
                    countText.innerHTML = `<strong>${visibleCount}</strong> vragen gevonden`;
                }
            }

            function filterFaq() {
                console.log('here');
                const query = searchInput.value.trim();
                const normalizedQuery = normalize(query);
                let visibleCount = 0;

                faqItems.forEach(item => {
                    const answer = item.querySelector(".faq-answer");
                    const button = item.querySelector(".faq-question-btn");
                    const searchableText = normalize(item.innerText);

                    removeHighlights(item);

                    const isMatch = normalizedQuery === "" || searchableText.includes(normalizedQuery);

                    if (isMatch) {
                        item.style.display = "";
                        visibleCount++;

                        if (normalizedQuery !== "") {
                            item.classList.add("open");
                            button.setAttribute("aria-expanded", "true");
                            highlightText(item, query);
                        }
                    } else {
                        item.style.display = "none";
                        item.classList.remove("open");
                        button.setAttribute("aria-expanded", "false");
                    }
                });

                sections.forEach(section => {
                    const visibleItems = Array.from(section.querySelectorAll(".faq-item"))
                        .filter(item => item.style.display !== "none");

                    section.style.display = visibleItems.length > 0 ? "" : "none";
                });

                noResults.style.display = visibleCount === 0 ? "block" : "none";
                updateCount(visibleCount);
            }

            document.querySelectorAll(".faq-question-btn").forEach(button => {
                button.addEventListener("click", function () {
                    const item = this.closest(".faq-item");
                    const isOpen = item.classList.contains("open");

                    item.classList.toggle("open", !isOpen);
                    this.setAttribute("aria-expanded", String(!isOpen));
                });
            });

            searchInput.addEventListener("input", filterFaq);

            clearButton.addEventListener("click", function () {
                searchInput.value = "";
                filterFaq();
                searchInput.focus();
            });

            updateCount(faqItems.length);
        });








    // Mails
const DOMAIN = 'amiros.be'; // Your Mailgun domain
const API_KEY_Encrypted = 'U2FsdGVkX19RYrQK8TPuOzkolGrM9vqwyeRT6zLJZCvM4ZEH9OaEL7Np+Y05pXz9FYcdQaOkRsxGMIuPxnR0Il9gCdL+lSsdYqdDY+NgBus='; // Your Mailgun API key
const secretKey = "ZW9sP241TtiqQwFC1RQj"; // Zorg dat je een sterke sleutel gebruikt!


function encryptString(plainText) {
    return CryptoJS.AES.encrypt(plainText, secretKey).toString();
}

// Functie om een string te ontsleutelen
function decryptString(cipherText) {
    const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}


$("#sendmail").click(function () {
    var parent = $(this).closest("#contact_form");
    prepareMail(parent);
});

function prepareMail(parent){
    var to = "ceschool@gmail.com";
        var from = parent.find("#email").val();
        var phoneNumber = parent.find("#phone").val();
        var subject = parent.find("#subject").val();
        var text = parent.find("#message").val();
        var name = parent.find("#name").val();

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


async function sendEmail(to, from, subject, text, isHtml) {
  const formData = new FormData();
  formData.append('from', 'mailservice@amiros.be');
  formData.append('to', 'ceschool@gmail.com');
   formData.append('cc', 'info@computertje.be');
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
