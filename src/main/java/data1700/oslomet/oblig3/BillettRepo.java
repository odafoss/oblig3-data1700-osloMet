package data1700.oslomet.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BillettRepo {
    @Autowired
    private JdbcTemplate db;

    public void lagreBillett(billett innbillett) {
        String sql = "INSERT INTO BILLETT (fornavn, etternavn, epost, tlfNr, antallBilletter, filmNavn) VALUES (?, ?, ?, ?, ?, ?)";
        db.update(sql, innbillett.getFornavn(), innbillett.getEtternavn(), innbillett.getEpost(), innbillett.getTlfNr(), innbillett.getAntallBilletter(), innbillett.getFilmNavn());
    }

    public List<billett> hentAlleBilletter() { // Riktig klassenavn: Billett
        String sql = "SELECT * FROM BILLETT ORDER BY etternavn";
        List<billett> hentBilletter = db.query(sql,new BeanPropertyRowMapper(billett.class));
        return hentBilletter;
    }

    public void slettbillett() {
        String sql ="DELETE FROM BILLETT";
        db.update(sql);

    }
    public void slettEnBillett (int id){
        String sql = "DELETE FROM BILLETT WHERE id=?";
        db.update(sql,id);
    }
}

