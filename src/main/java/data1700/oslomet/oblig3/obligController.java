package data1700.oslomet.oblig3;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class obligController {

@Autowired
private BillettRepo rep;

@PostMapping("/lagre")
public void lagreBillett(billett innBillett) {
    rep.lagreBillett(innBillett);
}

@GetMapping("/hentBilletter")
public List <billett> hentBilletter(){
    return rep.hentAlleBilletter();
}
@GetMapping("/slett")
    public void slett() {
    rep.slettbillett();
}
    @GetMapping("/slettEnBillett")
    public void slettEnBillett (@RequestParam("id") int id){
        rep.slettEnBillett(id);
}
}








