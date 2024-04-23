CREATE TABLE BILLETT(
                       id INTEGER AUTO_INCREMENT NOT NULL,
                       filmNavn VARCHAR(255) NOT NULL,
                       antallBilletter VARCHAR(255) NOT NULL,
                       fornavn VARCHAR (255) NOT NULL,
                       etternavn VARCHAR (255) NOT NULL,
                       epost VARCHAR (255) NOT NULL,
                       tlfNr VARCHAR (255) NOT NULL,
                       PRIMARY KEY (id)
);