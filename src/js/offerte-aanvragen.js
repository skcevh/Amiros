(function () {
    var STEPS = [
        "Keuze bevestigen",
        "Contactgegevens",
        "Projectvragen",
        "Aanbevolen opties",
        "Samenvatting",
        "Verzonden"
    ];

    var FLOW_ORDER = ["advies", "website-start", "website-basis", "website-plus", "amiros-launch"];

    var FLOWS = {
        "advies": {
            label: "Advies",
            summaryLabel: "Advies op maat",
            price: null,
            intro: "Weet je nog niet precies wat je nodig hebt? Geen probleem. Beantwoord enkele korte vragen en we denken met je mee.",
            questions: [
                {
                    id: "primaryNeed",
                    label: "Waarvoor zoek je vooral hulp?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "new-website", label: "Nieuwe website" },
                        { value: "improve-website", label: "Bestaande website verbeteren" },
                        { value: "branding", label: "Logo of branding" },
                        { value: "planner", label: "Online afspraken" },
                        { value: "support", label: "Digitale ondersteuning" },
                        { value: "software", label: "Software of automatisatie" },
                        { value: "unknown", label: "Ik weet het nog niet" }
                    ]
                },
                {
                    id: "starter",
                    label: "Ben je net gestart?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "no", label: "Nee" },
                        { value: "soon", label: "Binnenkort" }
                    ]
                },
                {
                    id: "hasWebsite",
                    label: "Heb je al een website?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "no", label: "Nee" },
                        { value: "building", label: "In opbouw" }
                    ]
                },
                {
                    id: "hasLogo",
                    label: "Heb je al een logo?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "refresh", label: "Ja, maar het mag opgefrist worden" },
                        { value: "no", label: "Nee" }
                    ]
                },
                {
                    id: "wantsPlanner",
                    label: "Wil je klanten online afspraken laten maken?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "maybe", label: "Misschien" },
                        { value: "no", label: "Nee" }
                    ]
                },
                {
                    id: "wantsVisibility",
                    label: "Wil je vooral beter zichtbaar zijn?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "no", label: "Nee" },
                        { value: "unknown", label: "Ik weet het niet" }
                    ]
                },
                {
                    id: "wantsSupport",
                    label: "Wil je maandelijks ondersteuning?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "maybe", label: "Misschien" },
                        { value: "no", label: "Nee" }
                    ]
                }
            ]
        },
        "website-start": {
            label: "Website Start",
            summaryLabel: "Website Start",
            price: "EUR 995 eenmalig + EUR 62 / maand",
            intro: "Je koos Website Start. Ideaal voor starters en kleine ondernemingen die snel professioneel online willen staan.",
            questions: [
                { id: "businessType", label: "Wat doet je bedrijf?", type: "text", required: true },
                { id: "products", label: "Welke diensten of producten bied je aan?", type: "textarea", required: true },
                { id: "targetGroup", label: "Wie zijn je klanten?", type: "text", required: true },
                {
                    id: "hasLogo",
                    label: "Heb je al een logo?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "refresh", label: "Ja, maar het mag opgefrist worden" },
                        { value: "no", label: "Nee" }
                    ]
                },
                {
                    id: "hasTexts",
                    label: "Heb je al teksten?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "partial", label: "Gedeeltelijk" },
                        { value: "no", label: "Nee" }
                    ]
                },
                {
                    id: "hasImages",
                    label: "Heb je al foto's of beeldmateriaal?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "partial", label: "Gedeeltelijk" },
                        { value: "no", label: "Nee" }
                    ]
                },
                {
                    id: "hasDomain",
                    label: "Heb je al een domeinnaam?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "no", label: "Nee" }
                    ]
                },
                {
                    id: "wantsPlanner",
                    label: "Wil je klanten online afspraken laten maken?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "maybe", label: "Misschien" },
                        { value: "no", label: "Nee" }
                    ]
                },
                {
                    id: "wantsLocalSeo",
                    label: "Wil je hulp met lokale zichtbaarheid in Google?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "no", label: "Nee" }
                    ]
                },
                {
                    id: "estimatedPages",
                    label: "Hoeveel inhoud verwacht je?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "one-page", label: "Een duidelijke one-page" },
                        { value: "few-pages", label: "Meerdere pagina's" },
                        { value: "many-pages", label: "Veel pagina's" }
                    ]
                },
                {
                    id: "timeline",
                    label: "Wanneer wil je online gaan?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "asap", label: "Zo snel mogelijk" },
                        { value: "month-1", label: "Binnen 1 maand" },
                        { value: "month-3", label: "Binnen 2-3 maanden" },
                        { value: "no-rush", label: "Geen haast" }
                    ]
                }
            ]
        },
        "website-basis": {
            label: "Website Basis",
            summaryLabel: "Website Basis",
            price: "EUR 1.390 eenmalig + EUR 62 / maand",
            intro: "Je koos Website Basis. Geschikt voor zelfstandigen en kleine KMO's die meer willen dan een one-page website.",
            questions: [
                {
                    id: "pageNeeds",
                    label: "Welke pagina's heb je nodig?",
                    type: "checkbox",
                    required: true,
                    options: [
                        { value: "home", label: "Home" },
                        { value: "diensten", label: "Diensten" },
                        { value: "over-ons", label: "Over ons" },
                        { value: "realisaties", label: "Realisaties" },
                        { value: "prijzen", label: "Prijzen" },
                        { value: "reviews", label: "Reviews" },
                        { value: "contact", label: "Contact" },
                        { value: "faq", label: "FAQ" },
                        { value: "andere", label: "Andere" }
                    ]
                },
                {
                    id: "pageCount",
                    label: "Hoeveel pagina's verwacht je ongeveer?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "up-to-5", label: "Tot 5" },
                        { value: "6-8", label: "6 tot 8" },
                        { value: "9plus", label: "9 of meer" }
                    ]
                },
                {
                    id: "hasTexts",
                    label: "Heb je al teksten per pagina?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "partial", label: "Gedeeltelijk" },
                        { value: "no", label: "Nee" }
                    ]
                },
                {
                    id: "hasImages",
                    label: "Heb je al foto's?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "partial", label: "Gedeeltelijk" },
                        { value: "no", label: "Nee" }
                    ]
                },
                {
                    id: "hasLogo",
                    label: "Heb je al een logo?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "no", label: "Nee" }
                    ]
                },
                {
                    id: "wantsPlanner",
                    label: "Wil je klanten online afspraken laten maken?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "maybe", label: "Misschien" },
                        { value: "no", label: "Nee" }
                    ]
                },
                {
                    id: "wantsLocalSeo",
                    label: "Wil je hulp met Google Business of lokale vindbaarheid?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "no", label: "Nee" }
                    ]
                },
                {
                    id: "wantsPrint",
                    label: "Wil je ook visitekaartjes of flyers?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "maybe", label: "Misschien" },
                        { value: "no", label: "Nee" }
                    ]
                },
                {
                    id: "timeline",
                    label: "Wanneer wil je online gaan?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "asap", label: "Zo snel mogelijk" },
                        { value: "month-1", label: "Binnen 1 maand" },
                        { value: "month-3", label: "Binnen 2-3 maanden" },
                        { value: "no-rush", label: "Geen haast" }
                    ]
                }
            ]
        },
        "website-plus": {
            label: "Website Plus",
            summaryLabel: "Website Plus",
            price: "EUR 3.630 eenmalig + EUR 79 / maand",
            intro: "Je koos Website Plus. Voor groeiende bedrijven die meer pagina's, structuur en mogelijkheden nodig hebben.",
            questions: [
                {
                    id: "pageCount",
                    label: "Hoeveel pagina's verwacht je?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "up-to-12", label: "Tot 12" },
                        { value: "12plus", label: "Meer dan 12" },
                        { value: "unknown", label: "Nog niet zeker" }
                    ]
                },
                {
                    id: "multilang",
                    label: "Moet de website meertalig zijn?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "no", label: "Nee" }
                    ]
                },
                {
                    id: "wantsBlog",
                    label: "Wil je blog of nieuwsberichten?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "maybe", label: "Misschien" },
                        { value: "no", label: "Nee" }
                    ]
                },
                {
                    id: "wantsPortfolio",
                    label: "Wil je portfolio of realisaties tonen?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "no", label: "Nee" }
                    ]
                },
                {
                    id: "wantsPlanner",
                    label: "Wil je online afspraken laten maken?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "maybe", label: "Misschien" },
                        { value: "no", label: "Nee" }
                    ]
                },
                {
                    id: "multiForms",
                    label: "Wil je meerdere formulieren?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "no", label: "Nee" }
                    ]
                },
                {
                    id: "externalTools",
                    label: "Wil je koppelingen met externe tools?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "maybe", label: "Misschien" },
                        { value: "no", label: "Nee" }
                    ]
                },
                {
                    id: "needsBranding",
                    label: "Heb je logo of branding nodig?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "maybe", label: "Misschien" },
                        { value: "no", label: "Nee" }
                    ]
                },
                {
                    id: "monthlySupport",
                    label: "Wil je maandelijkse ondersteuning na oplevering?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "maybe", label: "Misschien" },
                        { value: "no", label: "Nee" }
                    ]
                },
                {
                    id: "timeline",
                    label: "Wanneer wil je online gaan?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "asap", label: "Zo snel mogelijk" },
                        { value: "month-1", label: "Binnen 1 maand" },
                        { value: "month-3", label: "Binnen 2-3 maanden" },
                        { value: "no-rush", label: "Geen haast" }
                    ]
                }
            ]
        },
        "amiros-launch": {
            label: "Amiros Launch",
            summaryLabel: "Amiros Launch",
            price: "EUR 1.590 incl. btw (vanaf jaar 2: EUR 55 / maand)",
            intro: "Je koos Amiros Launch. Ideaal als je snel wil starten met een professionele online basis.",
            questions: [
                {
                    id: "starter",
                    label: "Ben je net gestart?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "no", label: "Nee" }
                    ]
                },
                { id: "companyNameReady", label: "Heb je al een bedrijfsnaam?", type: "radio", required: true, options: [
                    { value: "yes", label: "Ja" },
                    { value: "no", label: "Nee" }
                ] },
                {
                    id: "hasLogo",
                    label: "Heb je al een logo?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "no", label: "Nee" }
                    ]
                },
                {
                    id: "brandingChoice",
                    label: "Kies je liever voor basislogo of visitekaartje?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "logo", label: "Basislogo" },
                        { value: "business-card", label: "Visitekaartje" },
                        { value: "undecided", label: "Nog niet zeker" }
                    ]
                },
                {
                    id: "hasTexts",
                    label: "Heb je al teksten?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "partial", label: "Gedeeltelijk" },
                        { value: "no", label: "Nee" }
                    ]
                },
                {
                    id: "hasImages",
                    label: "Heb je al foto's?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "partial", label: "Gedeeltelijk" },
                        { value: "no", label: "Nee" }
                    ]
                },
                {
                    id: "hasDomain",
                    label: "Heb je al een domeinnaam?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "no", label: "Nee" }
                    ]
                },
                {
                    id: "plannerUse",
                    label: "Waarvoor wil je AmirosPlanner gebruiken?",
                    type: "textarea",
                    required: true
                },
                {
                    id: "needsMorePages",
                    label: "Heb je meer dan een one-page met max. 4 categorieen nodig?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "yes", label: "Ja" },
                        { value: "maybe", label: "Misschien" },
                        { value: "no", label: "Nee" }
                    ]
                },
                {
                    id: "timeline",
                    label: "Wanneer wil je lanceren?",
                    type: "radio",
                    required: true,
                    options: [
                        { value: "asap", label: "Zo snel mogelijk" },
                        { value: "month-1", label: "Binnen 1 maand" },
                        { value: "month-3", label: "Binnen 2-3 maanden" },
                        { value: "no-rush", label: "Geen haast" }
                    ]
                }
            ]
        }
    };

    var state = {
        step: 1,
        startTime: Date.now(),
        defaultFlow: "advies",
        flow: "advies",
        contact: {
            name: "",
            email: "",
            phone: "",
            company: "",
            website: "",
            vat: "",
            notes: ""
        },
        answers: {},
        selectedRecommendationIds: {},
        gdprAccepted: false,
        honeypot: "",
        submitMessage: "",
        submitError: ""
    };

    function getFlowFromUrl() {
        var params = new URLSearchParams(window.location.search);
        return params.get("flow") || "";
    }

    function normalizeFlow(flow) {
        if (!flow) {
            return state.defaultFlow;
        }

        var clean = String(flow).toLowerCase();
        if (FLOW_ORDER.indexOf(clean) >= 0) {
            return clean;
        }

        return state.defaultFlow;
    }

    function byId(id) {
        return document.getElementById(id);
    }

    function escapeHtml(value) {
        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/\"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function isFilled(value) {
        return String(value || "").trim().length > 0;
    }

    function ensureFlowAnswerContainer() {
        if (!state.answers[state.flow]) {
            state.answers[state.flow] = {};
        }
        return state.answers[state.flow];
    }

    function getFlowAnswers(flowKey) {
        return state.answers[flowKey] || {};
    }

    function getCurrentFlow() {
        return FLOWS[state.flow] || FLOWS[state.defaultFlow];
    }

    function priceLine(flow) {
        if (!flow.price) {
            return "";
        }
        return '<p class="offerte-flow-price">' + escapeHtml(flow.price) + '</p>';
    }

    function renderProgress() {
        var progress = byId("offerte-progress");
        if (!progress) {
            return;
        }

        var html = "";
        for (var i = 0; i < STEPS.length; i++) {
            var stepIndex = i + 1;
            var cls = "offerte-step-dot";
            if (stepIndex < state.step) {
                cls += " done";
            } else if (stepIndex === state.step) {
                cls += " active";
            }

            html += '<div class="offerte-step">';
            html += '<div class="' + cls + '">' + stepIndex + '</div>';
            html += '<div class="offerte-step-label">' + escapeHtml(STEPS[i]) + '</div>';
            html += '</div>';
        }

        progress.innerHTML = html;
    }

    function recommendationCard(rec) {
        var selected = !!state.selectedRecommendationIds[rec.id];
        var classes = "offerte-rec-card" + (selected ? " selected" : "");
        var badge = rec.kind === "package" ? "Past mogelijk beter" : "Los toe te voegen";

        var html = '<div class="' + classes + '" data-rec-id="' + escapeHtml(rec.id) + '">';
        html += '<div class="offerte-rec-badge">' + escapeHtml(badge) + '</div>';
        html += '<h4>' + escapeHtml(rec.title) + '</h4>';
        if (rec.price) {
            html += '<p class="offerte-rec-price">' + escapeHtml(rec.price) + '</p>';
        }
        html += '<p>' + escapeHtml(rec.text) + '</p>';

        if (!rec.price && rec.kind !== "package") {
            html += '<p class="offerte-rec-note">We nemen dit mee in je offerte.</p>';
        }

        html += '<div class="offerte-rec-actions">';
        html += '<button type="button" class="default-btn small rec-toggle" data-rec-id="' + escapeHtml(rec.id) + '">';
        html += selected ? "Interesse verwijderd" : "Interesse toevoegen";
        html += '</button>';

        if (rec.suggestFlow && FLOWS[rec.suggestFlow]) {
            html += '<button type="button" class="alternative-btn alt-color small rec-switch" data-flow="' + escapeHtml(rec.suggestFlow) + '">';
            html += escapeHtml(rec.switchLabel || (FLOWS[rec.suggestFlow].label + " kiezen"));
            html += '</button>';
        }

        html += '</div>';
        html += '</div>';
        return html;
    }

    function getRecommendations() {
        var answers = getFlowAnswers(state.flow);
        var recs = [];

        if (state.flow === "advies") {
            if ((answers.starter === "yes" || answers.starter === "soon") && (answers.hasWebsite === "no" || answers.hasWebsite === "building") && answers.hasLogo === "no") {
                recs.push({
                    id: "advies-launch",
                    kind: "package",
                    title: "Amiros Launch bekijken",
                    price: "EUR 1.590 incl. btw",
                    text: "Omdat je nog geen website en geen logo hebt, kan Amiros Launch een goede start zijn.",
                    suggestFlow: "amiros-launch",
                    switchLabel: "Amiros Launch kiezen"
                });
            }

            if (answers.wantsPlanner === "yes" || answers.wantsPlanner === "maybe" || answers.primaryNeed === "planner") {
                recs.push({
                    id: "advies-planner",
                    kind: "addon",
                    title: "AmirosPlanner toevoegen",
                    price: "EUR 14,99 / maand",
                    text: "Met AmirosPlanner kunnen klanten zelf online een afspraak maken."
                });
            }

            if (answers.primaryNeed === "software") {
                recs.push({
                    id: "advies-software",
                    kind: "addon",
                    title: "Software op maat bespreken",
                    text: "Je geeft aan dat je iets wil automatiseren of verbeteren. We nemen dit mee als maatwerkvraag."
                });
            }

            if ((answers.wantsVisibility === "yes" && answers.wantsSupport === "yes") || answers.primaryNeed === "support") {
                recs.push({
                    id: "advies-premium",
                    kind: "addon",
                    title: "Amiros Premium bekijken",
                    price: "EUR 4.990 incl. btw",
                    text: "Je aanvraag lijkt breder dan een losse dienst. Dit kunnen we als totaalbegeleiding bekijken."
                });
            }
        }

        if (state.flow === "website-start") {
            if (answers.hasLogo === "no") {
                recs.push({
                    id: "ws-logo",
                    kind: "addon",
                    title: "Logo laten voorzien",
                    text: "Je gaf aan dat je nog geen logo hebt. We kunnen dit apart meenemen in je voorstel."
                });
                recs.push({
                    id: "ws-launch",
                    kind: "package",
                    title: "Amiros Launch bekijken",
                    price: "EUR 1.590 incl. btw",
                    text: "Omdat je naast een website ook een visuele basis nodig hebt, kan Amiros Launch interessanter zijn.",
                    suggestFlow: "amiros-launch",
                    switchLabel: "Amiros Launch kiezen"
                });
            }

            if (answers.hasLogo === "refresh") {
                recs.push({
                    id: "ws-logo-refresh",
                    kind: "addon",
                    title: "Logo laten opfrissen",
                    text: "We kunnen een opfrissing van je bestaande logo meenemen in je offerte."
                });
            }

            if (answers.wantsPlanner === "yes" || answers.wantsPlanner === "maybe") {
                recs.push({
                    id: "ws-planner",
                    kind: "addon",
                    title: "AmirosPlanner toevoegen",
                    price: "EUR 14,99 / maand",
                    text: "Laat klanten online afspraken maken via een eenvoudige agenda."
                });
            }

            if (answers.hasTexts === "no" || answers.hasTexts === "partial") {
                recs.push({
                    id: "ws-copy",
                    kind: "addon",
                    title: "Teksten laten schrijven",
                    text: "We kunnen copywriting meenemen zodat je website duidelijk en professioneel is ingevuld."
                });
            }

            if (answers.hasImages === "no" || answers.hasImages === "partial") {
                recs.push({
                    id: "ws-images",
                    kind: "addon",
                    title: "Beeldmateriaal voorzien",
                    text: "We kunnen passende beelden meenemen in je offerte."
                });
            }

            if (answers.wantsLocalSeo === "yes") {
                recs.push({
                    id: "ws-seo",
                    kind: "addon",
                    title: "Lokale SEO meenemen",
                    text: "We nemen lokale zichtbaarheid mee in je voorstel."
                });
            }

            if (answers.estimatedPages === "few-pages" || answers.estimatedPages === "many-pages") {
                recs.push({
                    id: "ws-upgrade-basis",
                    kind: "package",
                    title: "Website Basis lijkt beter te passen",
                    price: "EUR 1.390 eenmalig + EUR 62 / maand",
                    text: "Je aanvraag lijkt ruimer dan een one-page website.",
                    suggestFlow: "website-basis",
                    switchLabel: "Website Basis kiezen"
                });
            }
        }

        if (state.flow === "website-basis") {
            if (answers.wantsPlanner === "yes" || answers.wantsPlanner === "maybe") {
                recs.push({
                    id: "wb-planner",
                    kind: "addon",
                    title: "AmirosPlanner toevoegen",
                    price: "EUR 14,99 / maand",
                    text: "Voeg online afspraken toe zodat klanten zelf een moment kunnen kiezen."
                });
            }

            if (answers.pageCount === "6-8" || answers.pageCount === "9plus") {
                recs.push({
                    id: "wb-upgrade-plus",
                    kind: "package",
                    title: "Website Plus lijkt beter te passen",
                    price: "EUR 3.630 eenmalig + EUR 79 / maand",
                    text: "Je gaf aan dat je meer dan 5 pagina's nodig hebt.",
                    suggestFlow: "website-plus",
                    switchLabel: "Website Plus kiezen"
                });
            }

            if (answers.hasLogo === "no") {
                recs.push({
                    id: "wb-logo",
                    kind: "addon",
                    title: "Logo laten voorzien",
                    text: "Een professioneel logo versterkt je website en herkenbaarheid."
                });
            }

            if (answers.wantsPrint === "yes" || answers.wantsPrint === "maybe") {
                recs.push({
                    id: "wb-grow",
                    kind: "addon",
                    title: "Amiros Grow bekijken",
                    price: "EUR 2.390 incl. btw",
                    text: "Je aanvraag gaat verder dan enkel een website."
                });
            }

            if (answers.wantsLocalSeo === "yes") {
                recs.push({
                    id: "wb-seo",
                    kind: "addon",
                    title: "Lokale SEO meenemen",
                    text: "We nemen lokale vindbaarheid mee in je voorstel."
                });
            }
        }

        if (state.flow === "website-plus") {
            if (answers.wantsPlanner === "yes" || answers.wantsPlanner === "maybe") {
                recs.push({
                    id: "wp-planner",
                    kind: "addon",
                    title: "AmirosPlanner toevoegen",
                    price: "EUR 14,99 / maand",
                    text: "Interessant wanneer klanten rechtstreeks via je website afspraken moeten kunnen boeken."
                });
            }

            if (answers.needsBranding === "yes" || answers.needsBranding === "maybe") {
                recs.push({
                    id: "wp-branding",
                    kind: "addon",
                    title: "Branding meenemen",
                    text: "We kunnen logo, visitekaartje of ander grafisch materiaal meenemen in je offerte."
                });
            }

            if (answers.externalTools === "yes" || answers.multiForms === "yes" || answers.pageCount === "12plus") {
                recs.push({
                    id: "wp-custom",
                    kind: "addon",
                    title: "Website op maat bespreken",
                    text: "Je aanvraag bevat functies die mogelijk buiten een standaard website vallen."
                });
            }

            if (answers.monthlySupport === "yes" || answers.monthlySupport === "maybe") {
                recs.push({
                    id: "wp-partner-business",
                    kind: "addon",
                    title: "Partner Business bekijken",
                    price: "EUR 299 / maand",
                    text: "Handig als je na oplevering regelmatig hulp wil bij aanpassingen of ondersteuning."
                });
            }

            if ((answers.needsBranding === "yes" || answers.needsBranding === "maybe") && (answers.wantsPlanner === "yes" || answers.wantsPlanner === "maybe")) {
                recs.push({
                    id: "wp-grow-premium",
                    kind: "addon",
                    title: "Amiros Grow of Premium bekijken",
                    text: "Omdat je naast een uitgebreide website ook branding en afspraken nodig hebt, kan een Amiros-pakket interessanter zijn."
                });
            }
        }

        if (state.flow === "amiros-launch") {
            if (answers.needsMorePages === "yes" || answers.needsMorePages === "maybe") {
                recs.push({
                    id: "al-grow",
                    kind: "addon",
                    title: "Amiros Grow lijkt beter te passen",
                    price: "EUR 2.390 incl. btw",
                    text: "Je gaf aan dat je meer inhoud of meerdere pagina's nodig hebt."
                });
            }

            if (answers.hasTexts === "no" || answers.hasTexts === "partial") {
                recs.push({
                    id: "al-copy",
                    kind: "addon",
                    title: "Tekstschrijven meenemen",
                    text: "Copywriting zit niet standaard in Launch, maar kan apart worden toegevoegd."
                });
            }

            if (answers.hasImages === "no" || answers.hasImages === "partial") {
                recs.push({
                    id: "al-images",
                    kind: "addon",
                    title: "Beeldmateriaal meenemen",
                    text: "Stockbeelden zitten niet standaard inbegrepen, maar kunnen apart worden toegevoegd."
                });
            }

            if (answers.needsMorePages === "yes") {
                recs.push({
                    id: "al-extra-pages",
                    kind: "addon",
                    title: "Extra pagina's nodig",
                    text: "Launch is beperkt tot one-page met max. 4 categorieen. Extra pagina's nemen we mee in de offerte."
                });
            }
        }

        return recs;
    }

    function renderStep1() {
        var flow = getCurrentFlow();
        var html = '';
        html += '<div class="offerte-panel">';
        html += '<h3>Stap 1: keuze bevestigen</h3>';
        html += '<p class="offerte-picked">Je koos: <strong>' + escapeHtml(flow.label) + '</strong></p>';
        html += '<p>' + escapeHtml(flow.intro) + '</p>';
        html += priceLine(flow);
        html += '<div class="offerte-nav">';
        html += '<button type="button" class="default-btn" data-action="next">Verdergaan</button>';
        html += '</div>';
        html += '</div>';
        return html;
    }

    function renderContactField(id, label, type, required) {
        return '' +
            '<div class="offerte-field">' +
            '<label for="contact-' + id + '">' + escapeHtml(label) + (required ? ' *' : '') + '</label>' +
            '<input id="contact-' + id + '" data-contact="' + id + '" type="' + type + '" value="' + escapeHtml(state.contact[id] || "") + '" ' + (required ? 'required' : '') + ' />' +
            '</div>';
    }

    function renderStep2() {
        var html = '';
        html += '<div class="offerte-panel">';
        html += '<h3>Stap 2: jouw gegevens</h3>';
        html += '<p>Laat je gegevens achter zodat we je aanvraag correct kunnen opvolgen.</p>';
        html += '<div class="offerte-grid two">';
        html += renderContactField("name", "Naam", "text", true);
        html += renderContactField("email", "E-mailadres", "email", true);
        html += renderContactField("phone", "Telefoonnummer", "tel", true);
        html += renderContactField("company", "Bedrijfsnaam", "text", false);
        html += renderContactField("website", "Bestaande website", "text", false);
        html += renderContactField("vat", "Ondernemingsnummer", "text", false);
        html += '</div>';
        html += '<div class="offerte-field">';
        html += '<label for="contact-notes">Extra opmerking</label>';
        html += '<textarea id="contact-notes" data-contact="notes" rows="4">' + escapeHtml(state.contact.notes || "") + '</textarea>';
        html += '</div>';
        html += '<div class="offerte-nav">';
        html += '<button type="button" class="alternative-btn alt-color" data-action="prev">Vorige</button>';
        html += '<button type="button" class="default-btn" data-action="next-contact">Verdergaan</button>';
        html += '</div>';
        html += '<div id="offerte-contact-error" class="offerte-error"></div>';
        html += '</div>';
        return html;
    }

    function renderQuestion(question) {
        var answers = getFlowAnswers(state.flow);
        var current = answers[question.id];
        var html = '';

        html += '<div class="offerte-field">';
        html += '<label>' + escapeHtml(question.label) + (question.required ? ' *' : '') + '</label>';

        if (question.type === "text") {
            html += '<input type="text" data-question="' + escapeHtml(question.id) + '" value="' + escapeHtml(current || "") + '" />';
        } else if (question.type === "textarea") {
            html += '<textarea rows="3" data-question="' + escapeHtml(question.id) + '">' + escapeHtml(current || "") + '</textarea>';
        } else if (question.type === "radio") {
            html += '<div class="offerte-options">';
            for (var i = 0; i < question.options.length; i++) {
                var option = question.options[i];
                var checked = current === option.value ? 'checked' : '';
                html += '<label class="offerte-option">';
                html += '<input type="radio" name="q-' + escapeHtml(question.id) + '" data-question="' + escapeHtml(question.id) + '" value="' + escapeHtml(option.value) + '" ' + checked + ' />';
                html += '<span>' + escapeHtml(option.label) + '</span>';
                html += '</label>';
            }
            html += '</div>';
        } else if (question.type === "checkbox") {
            var values = Array.isArray(current) ? current : [];
            html += '<div class="offerte-options">';
            for (var j = 0; j < question.options.length; j++) {
                var cOption = question.options[j];
                var cChecked = values.indexOf(cOption.value) >= 0 ? 'checked' : '';
                html += '<label class="offerte-option">';
                html += '<input type="checkbox" data-question="' + escapeHtml(question.id) + '" value="' + escapeHtml(cOption.value) + '" ' + cChecked + ' />';
                html += '<span>' + escapeHtml(cOption.label) + '</span>';
                html += '</label>';
            }
            html += '</div>';
        }

        html += '</div>';
        return html;
    }

    function renderStep3() {
        var flow = getCurrentFlow();
        var html = '';

        html += '<div class="offerte-panel">';
        html += '<h3>Stap 3: projectvragen</h3>';
        html += '<p>Beantwoord de vragen voor <strong>' + escapeHtml(flow.label) + '</strong>.</p>';
        html += '<div class="offerte-grid">';

        for (var i = 0; i < flow.questions.length; i++) {
            html += renderQuestion(flow.questions[i]);
        }

        html += '</div>';
        html += '<div class="offerte-nav">';
        html += '<button type="button" class="alternative-btn alt-color" data-action="prev">Vorige</button>';
        html += '<button type="button" class="default-btn" data-action="next-questions">Verdergaan</button>';
        html += '</div>';
        html += '<div id="offerte-questions-error" class="offerte-error"></div>';
        html += '</div>';

        return html;
    }

    function renderStep4() {
        var recs = getRecommendations();
        var html = '';

        html += '<div class="offerte-panel">';
        html += '<h3>Stap 4: aanbevolen opties</h3>';
        html += '<p>Aanbevolen voor jouw aanvraag. Je gekozen pakket blijft behouden, tenzij je zelf een andere keuze maakt.</p>';

        if (!recs.length) {
            html += '<p class="offerte-soft-note">Er zijn momenteel geen extra aanbevelingen op basis van je antwoorden.</p>';
        } else {
            html += '<div class="offerte-rec-grid">';
            for (var i = 0; i < recs.length; i++) {
                html += recommendationCard(recs[i]);
            }
            html += '</div>';
        }

        html += '<div class="offerte-nav">';
        html += '<button type="button" class="alternative-btn alt-color" data-action="prev">Vorige</button>';
        html += '<button type="button" class="default-btn" data-action="next">Verdergaan</button>';
        html += '</div>';
        html += '</div>';

        return html;
    }

    function getSelectedRecommendationTitles() {
        var recs = getRecommendations();
        var selected = [];
        for (var i = 0; i < recs.length; i++) {
            if (state.selectedRecommendationIds[recs[i].id]) {
                selected.push(recs[i].title + (recs[i].price ? " (" + recs[i].price + ")" : ""));
            }
        }
        return selected;
    }

    function labelForQuestion(flow, questionId, value) {
        var i;
        for (i = 0; i < flow.questions.length; i++) {
            if (flow.questions[i].id === questionId) {
                var q = flow.questions[i];
                if (!q.options) {
                    return value;
                }
                if (Array.isArray(value)) {
                    var parts = [];
                    for (var j = 0; j < value.length; j++) {
                        parts.push(labelForQuestion(flow, questionId, value[j]));
                    }
                    return parts.join(", ");
                }
                for (var k = 0; k < q.options.length; k++) {
                    if (q.options[k].value === value) {
                        return q.options[k].label;
                    }
                }
            }
        }
        return value;
    }

    function renderSummaryRows() {
        var flow = getCurrentFlow();
        var answers = getFlowAnswers(state.flow);
        var html = '';

        html += '<tr><th>Gekozen dienst of pakket</th><td>' + escapeHtml(flow.summaryLabel) + '</td></tr>';
        if (flow.price) {
            html += '<tr><th>Prijsindicatie</th><td>' + escapeHtml(flow.price) + '</td></tr>';
        }

        html += '<tr><th>Naam</th><td>' + escapeHtml(state.contact.name) + '</td></tr>';
        html += '<tr><th>E-mail</th><td>' + escapeHtml(state.contact.email) + '</td></tr>';
        html += '<tr><th>Telefoon</th><td>' + escapeHtml(state.contact.phone) + '</td></tr>';

        if (isFilled(state.contact.company)) {
            html += '<tr><th>Bedrijf</th><td>' + escapeHtml(state.contact.company) + '</td></tr>';
        }
        if (isFilled(state.contact.website)) {
            html += '<tr><th>Bestaande website</th><td>' + escapeHtml(state.contact.website) + '</td></tr>';
        }
        if (isFilled(state.contact.vat)) {
            html += '<tr><th>Ondernemingsnummer</th><td>' + escapeHtml(state.contact.vat) + '</td></tr>';
        }
        if (isFilled(state.contact.notes)) {
            html += '<tr><th>Extra opmerking</th><td>' + escapeHtml(state.contact.notes) + '</td></tr>';
        }

        var qList = flow.questions;
        for (var i = 0; i < qList.length; i++) {
            var q = qList[i];
            var value = answers[q.id];
            if (value === undefined || value === null || value === "" || (Array.isArray(value) && value.length === 0)) {
                continue;
            }
            html += '<tr><th>' + escapeHtml(q.label) + '</th><td>' + escapeHtml(labelForQuestion(flow, q.id, value)) + '</td></tr>';
        }

        var selected = getSelectedRecommendationTitles();
        if (selected.length) {
            html += '<tr><th>Extra opties/interesses</th><td>' + escapeHtml(selected.join(", ")) + '</td></tr>';
        }

        return html;
    }

    function renderStep5() {
        var html = '';

        html += '<div class="offerte-panel">';
        html += '<h3>Stap 5: samenvatting</h3>';
        html += '<p>Controleer je aanvraag. Klopt alles? Dan bezorgen we je een duidelijk voorstel op maat.</p>';

        html += '<div class="offerte-summary-table-wrap">';
        html += '<table class="offerte-summary-table">';
        html += '<tbody>' + renderSummaryRows() + '</tbody>';
        html += '</table>';
        html += '</div>';

        html += '<div class="offerte-consent">';
        html += '<label>';
        html += '<input type="checkbox" id="offerte-gdpr" ' + (state.gdprAccepted ? 'checked' : '') + ' />';
        html += '<span>Ik ga akkoord dat Amiros mijn gegevens gebruikt om mijn aanvraag te beantwoorden. *</span>';
        html += '</label>';
        html += '<p><a href="conditions/privacyverklaring.html" target="_blank" rel="noopener">Privacyverklaring</a></p>';
        html += '</div>';

        html += '<input class="offerte-honeypot" type="text" id="offerte-honeypot" autocomplete="off" tabindex="-1" aria-hidden="true" value="' + escapeHtml(state.honeypot) + '" />';

        html += '<div class="offerte-nav">';
        html += '<button type="button" class="alternative-btn alt-color" data-action="prev">Vorige</button>';
        html += '<button type="button" class="default-btn" data-action="submit">Aanvraag verzenden</button>';
        html += '</div>';

        if (state.submitError) {
            html += '<div class="offerte-error">' + escapeHtml(state.submitError) + '</div>';
        }
        if (state.submitMessage) {
            html += '<div class="offerte-success">' + escapeHtml(state.submitMessage) + '</div>';
        }

        html += '</div>';

        return html;
    }

    function renderStep6() {
        var html = '';
        html += '<div class="offerte-panel">';
        html += '<h3>Stap 6: verzonden</h3>';
        html += '<h4>Bedankt voor je aanvraag</h4>';
        html += '<p>We hebben je gegevens goed ontvangen. We bekijken je aanvraag en bezorgen je binnenkort een duidelijk voorstel dat past bij je project.</p>';
        html += '<div class="offerte-nav">';
        html += '<a class="default-btn" href="index.html">Terug naar home</a>';
        html += '</div>';
        html += '</div>';
        return html;
    }

    function render() {
        var content = byId("offerte-content");
        if (!content) {
            return;
        }

        renderProgress();

        if (state.step === 1) {
            content.innerHTML = renderStep1();
        } else if (state.step === 2) {
            content.innerHTML = renderStep2();
        } else if (state.step === 3) {
            content.innerHTML = renderStep3();
        } else if (state.step === 4) {
            content.innerHTML = renderStep4();
        } else if (state.step === 5) {
            content.innerHTML = renderStep5();
        } else {
            content.innerHTML = renderStep6();
        }

        wireEvents();
    }

    function setQuestionAnswer(questionId, value, isCheckbox) {
        var answers = ensureFlowAnswerContainer();
        if (isCheckbox) {
            if (!Array.isArray(answers[questionId])) {
                answers[questionId] = [];
            }
            var list = answers[questionId];
            var idx = list.indexOf(value);
            if (idx >= 0) {
                list.splice(idx, 1);
            } else {
                list.push(value);
            }
        } else {
            answers[questionId] = value;
        }
    }

    function syncInputsToState() {
        var contactInputs = document.querySelectorAll("[data-contact]");
        for (var i = 0; i < contactInputs.length; i++) {
            var c = contactInputs[i];
            state.contact[c.getAttribute("data-contact")] = c.value;
        }

        var questionInputs = document.querySelectorAll("[data-question]");
        for (var j = 0; j < questionInputs.length; j++) {
            var qInput = questionInputs[j];
            var qId = qInput.getAttribute("data-question");
            if (!qId) {
                continue;
            }

            if (qInput.type === "radio") {
                if (qInput.checked) {
                    setQuestionAnswer(qId, qInput.value, false);
                }
            } else if (qInput.type === "checkbox") {
                // checkboxes are handled by click event
            } else {
                setQuestionAnswer(qId, qInput.value, false);
            }
        }

        var gdpr = byId("offerte-gdpr");
        if (gdpr) {
            state.gdprAccepted = gdpr.checked;
        }

        var honeypot = byId("offerte-honeypot");
        if (honeypot) {
            state.honeypot = honeypot.value;
        }
    }

    function validateContact() {
        syncInputsToState();

        if (!isFilled(state.contact.name)) {
            return "Vul je naam in.";
        }

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(String(state.contact.email || "").trim())) {
            return "Vul een geldig e-mailadres in.";
        }

        if (!isFilled(state.contact.phone)) {
            return "Vul je telefoonnummer in.";
        }

        return "";
    }

    function validateQuestions() {
        syncInputsToState();

        var flow = getCurrentFlow();
        var answers = ensureFlowAnswerContainer();

        for (var i = 0; i < flow.questions.length; i++) {
            var q = flow.questions[i];
            if (!q.required) {
                continue;
            }
            var value = answers[q.id];

            if (q.type === "checkbox") {
                if (!Array.isArray(value) || value.length === 0) {
                    return "Vul alle verplichte vragen in voordat je verdergaat.";
                }
            } else if (!isFilled(value)) {
                return "Vul alle verplichte vragen in voordat je verdergaat.";
            }
        }

        return "";
    }

    function getRateLimitError() {
        var key = "amiros-offerte-last-submit";
        var now = Date.now();
        var last = parseInt(localStorage.getItem(key) || "0", 10);
        if (last && now - last < 30000) {
            return "Je hebt net een aanvraag verzonden. Wacht 30 seconden en probeer opnieuw.";
        }
        localStorage.setItem(key, String(now));
        return "";
    }

    function buildPayload() {
        var flow = getCurrentFlow();
        var selected = getSelectedRecommendationTitles();

        return {
            flow: state.flow,
            flowLabel: flow.summaryLabel,
            flowPrice: flow.price,
            contact: state.contact,
            answers: getFlowAnswers(state.flow),
            recommendations: selected,
            submittedAt: new Date().toISOString()
        };
    }

    function buildMailBody(payload) {
        var lines = [];
        lines.push("Nieuwe offerteaanvraag via website");
        lines.push("");
        lines.push("Gekozen dienst of pakket: " + payload.flowLabel);
        if (payload.flowPrice) {
            lines.push("Prijsindicatie: " + payload.flowPrice);
        }
        lines.push("");
        lines.push("Contactgegevens:");
        lines.push("- Naam: " + (payload.contact.name || ""));
        lines.push("- E-mail: " + (payload.contact.email || ""));
        lines.push("- Telefoon: " + (payload.contact.phone || ""));
        lines.push("- Bedrijf: " + (payload.contact.company || "-"));
        lines.push("- Website: " + (payload.contact.website || "-"));
        lines.push("- Ondernemingsnummer: " + (payload.contact.vat || "-"));
        lines.push("- Extra opmerking: " + (payload.contact.notes || "-"));
        lines.push("");
        lines.push("Projectvragen:");

        var flow = getCurrentFlow();
        for (var i = 0; i < flow.questions.length; i++) {
            var q = flow.questions[i];
            var value = payload.answers[q.id];
            if (value === undefined || value === null || value === "" || (Array.isArray(value) && !value.length)) {
                continue;
            }
            lines.push("- " + q.label + ": " + labelForQuestion(flow, q.id, value));
        }

        lines.push("");
        lines.push("Extra opties/interesses: " + (payload.recommendations.length ? payload.recommendations.join(", ") : "Geen"));
        lines.push("Timing: " + (payload.answers.timeline ? labelForQuestion(flow, "timeline", payload.answers.timeline) : "Niet opgegeven"));
        lines.push("");
        lines.push("Verzonden op: " + payload.submittedAt);

        return lines.join("\n");
    }

    function fallbackToMail(payload) {
        var subject = encodeURIComponent("Nieuwe offerteaanvraag - " + payload.flowLabel);
        var body = encodeURIComponent(buildMailBody(payload));
        window.location.href = "mailto:info@amiros.be?subject=" + subject + "&body=" + body;
    }

    function submitRequest() {
        syncInputsToState();
        state.submitError = "";
        state.submitMessage = "";

        if (!state.gdprAccepted) {
            state.submitError = "Je moet akkoord gaan met de privacyverklaring voor verzending.";
            render();
            return;
        }

        if (isFilled(state.honeypot)) {
            state.submitError = "Verzending geblokkeerd.";
            render();
            return;
        }

        if (Date.now() - state.startTime < 4000) {
            state.submitError = "Formulier te snel verzonden. Probeer opnieuw over enkele seconden.";
            render();
            return;
        }

        var rateError = getRateLimitError();
        if (rateError) {
            state.submitError = rateError;
            render();
            return;
        }

        var payload = buildPayload();
        var endpoint = window.OFFERTE_ENDPOINT || "/api/offerte-aanvragen";

        fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }).then(function (response) {
            if (!response.ok) {
                throw new Error("submit-failed");
            }
            state.step = 6;
            render();
        }).catch(function () {
            fallbackToMail(payload);
            state.submitMessage = "Je mailprogramma werd geopend als fallback. Bevestig daar je bericht om de aanvraag te versturen.";
            state.step = 6;
            render();
        });
    }

    function goToStep(step) {
        state.step = Math.max(1, Math.min(6, step));
        render();
    }

    function wireEvents() {
        var actionButtons = document.querySelectorAll("[data-action]");
        for (var i = 0; i < actionButtons.length; i++) {
            actionButtons[i].addEventListener("click", function (event) {
                var action = event.currentTarget.getAttribute("data-action");

                if (action === "next") {
                    goToStep(state.step + 1);
                }

                if (action === "prev") {
                    goToStep(state.step - 1);
                }

                if (action === "next-contact") {
                    var contactError = validateContact();
                    if (contactError) {
                        var contactErrorNode = byId("offerte-contact-error");
                        if (contactErrorNode) {
                            contactErrorNode.textContent = contactError;
                        }
                        return;
                    }
                    goToStep(3);
                }

                if (action === "next-questions") {
                    var questionsError = validateQuestions();
                    if (questionsError) {
                        var questionsErrorNode = byId("offerte-questions-error");
                        if (questionsErrorNode) {
                            questionsErrorNode.textContent = questionsError;
                        }
                        return;
                    }
                    goToStep(4);
                }

                if (action === "submit") {
                    submitRequest();
                }
            });
        }

        var questionInputs = document.querySelectorAll("[data-question]");
        for (var q = 0; q < questionInputs.length; q++) {
            questionInputs[q].addEventListener("change", function (event) {
                var target = event.currentTarget;
                var qId = target.getAttribute("data-question");
                if (!qId) {
                    return;
                }

                if (target.type === "checkbox") {
                    setQuestionAnswer(qId, target.value, true);
                } else {
                    setQuestionAnswer(qId, target.value, false);
                }
            });

            if (questionInputs[q].tagName === "TEXTAREA" || questionInputs[q].type === "text") {
                questionInputs[q].addEventListener("input", function (event) {
                    var target = event.currentTarget;
                    var qId = target.getAttribute("data-question");
                    if (!qId) {
                        return;
                    }
                    setQuestionAnswer(qId, target.value, false);
                });
            }
        }

        var recToggles = document.querySelectorAll(".rec-toggle");
        for (var r = 0; r < recToggles.length; r++) {
            recToggles[r].addEventListener("click", function (event) {
                var recId = event.currentTarget.getAttribute("data-rec-id");
                if (!recId) {
                    return;
                }

                state.selectedRecommendationIds[recId] = !state.selectedRecommendationIds[recId];
                render();
            });
        }

        var recSwitches = document.querySelectorAll(".rec-switch");
        for (var s = 0; s < recSwitches.length; s++) {
            recSwitches[s].addEventListener("click", function (event) {
                var targetFlow = event.currentTarget.getAttribute("data-flow");
                if (!targetFlow || !FLOWS[targetFlow]) {
                    return;
                }

                state.flow = targetFlow;
                ensureFlowAnswerContainer();
                render();
            });
        }
    }

    function init() {
        var app = byId("offerte-app");
        if (!app) {
            return;
        }

        var defaultFlow = app.getAttribute("data-default-flow");
        if (defaultFlow && FLOWS[defaultFlow]) {
            state.defaultFlow = defaultFlow;
        }

        state.flow = normalizeFlow(getFlowFromUrl());
        ensureFlowAnswerContainer();

        if (window.location.search.indexOf("flow=") === -1) {
            var params = new URLSearchParams(window.location.search);
            params.set("flow", state.flow);
            window.history.replaceState({}, "", window.location.pathname + "?" + params.toString());
        }

        render();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
