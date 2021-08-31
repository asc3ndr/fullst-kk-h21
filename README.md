<html>
    <head>
        <style>
            h1, h2, h3, h4, h5, h6 {
                font-weight: bold;
                font-family: monospace;
            }
            h2 { 
                display: inline-block;
                text-decoration: none;
                text-decoration-skip-ink: auto;
                transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
            }
            h2:before {
                position: relative;
                counter-increment: section 1;
                content: "0" counter(section) ".";
                margin-right: 0.5rem;
                color: #64ffda;
                font-family: monospace;
                font-style: italic;
                font-weight: 400;
            }
            :is(h2):hover {
                outline: 0px;
            }
            :is(h2):after {
                content: "";
                display: block;
                width: 0px;
                height: 1px;
                position: relative;
                bottom: 0.5rem;
                background-color: #64ffda;
                transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
                opacity: 0.5;
            }
            :is(h1, h2, a):hover:after { 
                width: 100%; 
            }
            #content { margin: 0 auto; max-width: 40vw; }
            header { text-align: center; }
            section { margin: 3rem 5rem 0 5rem; }
            section div { padding-left: 3.5rem; }
            section div + div { margin-top: 2rem; }
            .emerald { 
                color: #64ffda;
                font-family: monospace;
                font-style: italic;
                font-weight: 400;
             }
        </style>
    </head>
    <body>
        <div id="content">
            <header>
                <h1>FULLSTÆKK UTVIKLING <em class="emerald">//</em> INNLEVERINGER </h1>
            </header>
            <section>
                <h2>Intro til Fullstæk utvikling</h2>
                <div>
                    <h3>Notat til oppgave <em class="emerald">3.</em></h3>
                    <p>
                    Har valgt å ikke gjøre denne da det begynner å bli dårlig med tid og jeg har 5 emner ved siden av jobb denne høsten, så håper det er forståelse for at en ikke-obligatorisk deloppgave ikke blir prioritert.
                    <br>
                    Forhåpentligvis like greit - mine designferdigheter skal vi ikke rope høyt om. 😊
                    </p>
                </div>
                <div>
                    <h3>Notat til oppgave <em class="emerald">4.</em></h3>
                    <p>Har ikke fullført deloppgaven som var å installert Github desktop da jeg allerede er vant med og liker å bruke Github.</p>
                </div>
                <div>
                    <h3>Notat til oppgave <em class="emerald">5.</em></h3>
                    <p>Lastet opp til dette repoet som bevis på fullført oppgave.</p>
                </div>
                <div>
                    <h3>Notat til oppgave <em class="emerald">6.</em></h3>
                    <p>Har ikke laget et Trello board, tross at jeg allerede har en bruker og er velkjent med bruk av verktøyet. Foretrekker å bruke Github projects til private eller skole-prosjekter.</p>
                </div>
            </section>
        </div>
    </body>
</html>