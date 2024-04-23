let utMeldingFornavn = "";
let utMeldingEtternavn = "";
let utMeldingEpost = "";
let utMeldingtlfNr = "";
let utMeldingAntall ="";
let utMeldingFilm ="";

function inputValidering(){
    $("#feilFornavn").html("");
    $("#feilEtternavn").html("");
    $("#feilEpost").html("");
    $("#feilTelefonNr").html("");
    $("#feilAntallBilletter").html("");
    $("#feilFilmNavn").html("");


    let fornavnInput =$('#fornavn').val();
    let etternavnInput = $('#etternavn').val();
    let epostInput = $('#epost').val();
    let tlfNrInput = $('#tlfNr').val();
    let antallInput=$('#antallBilletter').val();
    let filmInput =$("#filmNavn").val();

    const regexNavn = /^[a-zA-Z]+$/;
    const regexEpost = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    const regexTlfNr = /^((0047)?|(\+47)?)[4|9]\d{7}$/

    if(filmInput === "velgFilm"){
        utMeldingFilm ="feil";
        $("#feilFilmNavn").html("Velg en film!")
    }else{
        utMeldingFilm=$("#filmNavn").val();
    }

    if(antallInput>=1){
        utMeldingAntall=$('#antallBilletter').val();

    }else{
        utMeldingAntall = "feil";
        $("#feilAntallBilletter").html("Velg hvor mange billetter du vil kjøpe");
    }

    if (regexNavn.test(fornavnInput)){
        utMeldingFornavn =$('#fornavn').val();

    }else{
        utMeldingFornavn = "feil";
        $("#feilFornavn").html("ikke gyldig fornavn");
    }
    if (regexNavn.test(etternavnInput)){
        utMeldingEtternavn = $('#etternavn').val();
    }else{
        utMeldingEtternavn = "feil";
        $("#feilEtternavn").html("ikke gyldig etternavn");
    }
    if (regexEpost.test(epostInput)){
        utMeldingEpost =$('#epost').val();
    }else{
        utMeldingEpost = "feil";
        $("#feilEpost").html("ikke gyldig epost");
    }
    if (regexTlfNr.test(tlfNrInput)){
        utMeldingtlfNr =$('#tlfNr').val();
    }else{
        utMeldingtlfNr = "feil";
        $("#feilTelefonNr").html("ikke gyldig telefonummer");
    }
}


function kjopBillett() {

    const billett = {
        filmNavn: $('#filmNavn').val(),
        antallBilletter: $("#antallBilletter").val(),
        fornavn: $('#fornavn').val(),
        etternavn: $('#etternavn').val(),
        epost: $('#epost').val(),
        tlfNr: $('#tlfNr').val()
    };
    if (utMeldingFornavn !== "feil" && utMeldingEtternavn !== "feil" && utMeldingEpost !== "feil" && utMeldingtlfNr !== "feil" && utMeldingFilm !== "feil" && utMeldingAntall!== "feil") {
        $.post("/lagre", billett, function () {
            hentAlle(); // Oppdater listen over billetter
        });
    }

    $("#filmNavn").val("");
    $("#antallBilletter").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#epost").val("");
    $("#tlfNr").val("");
}
function hentAlle() {
    $.get("/hentBilletter", function (data) {
        formaterData(data); // Oppdater visningen av billetter
    });
}

function formaterData(billett) {
    let ut = "<table><tr><th>Film</th><th>Antall Billetter </th><th>Fornavn</th><th>Etternavn</th><th>Epost</th><th>Telefonummer</th></tr>";
    for (const x of billett) {
        ut += "<tr><td>" + x.filmNavn + "</td><td>" + x.antallBilletter + "</td><td>" + x.fornavn + "</td><td>" + x.etternavn + "</td><td>" + x.epost + "</td><td>" + x.tlfNr + "</td></tr>";
    }
    ut += "</table>";
    $("#output").html(ut);
}

    function slettBillett() {
        $.get("/slett", function () {
            hentAlle()
        });
        $('#output').html('');

        $("#feilFornavn").html("");
        $("#feilEtternavn").html("");
        $("#feilEpost").html("");
        $("#feilTelefonNr").html("");
        $("#feilFilmNavn").html("");
        $("#feilAntallBilletter").html("");
}

