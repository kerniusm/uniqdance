import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  closeResult: string;
  sectionName: string;
  data: any = {
    "aboutUs": {
      "title": 'Apie įmonę',
      "imageURL": 'assets/photos/Apie-mus1.png',
      "description": "<p>&quot;Uniq Dance&quot; - šokiai visiems, neišskiriant turimos negalios ar specialiųjų poreikių. Organizacijos tikslas yra ne tik organizuoti šokių būrelius, bet ir suteikti galimybę specialiųjų poreikių vaikams integruotis į visuomenę bei pačią visuomenę labiau informuoti, kad yra kitokie vaikai, bet jie ne mažiau verti meilės ir draugystės. Didysis tikslas suburti neformalaus ugdymo mokytojų ratą, siekiant neformalų ugdymą padaryti labiauprieinamą specialų poreikių vaikams. Praplėsti neformalaus ugdymo adaptuotas grupe su įvairias užsiėmimais. <p>Šiuo metu yra šokių grupės vaikams, turinčiais Dauno sindromą, autistiškiems vaikams Vilniuje ir mišri grupė Alytuje (vaikai ir jaunimas suįvairiomis negaliomis (cerebrinis paralyžius, regėjimo negalia ir kitos). Daugiau apie vedamus šokius galite išvysti &quot;Pozityvu.lt&quot;: <a href=\"http://pozityvu.lt/sokis-neigaliesiems-tai-raktas-bendravima/\">http://pozityvu.lt/sokis-neigaliesiems-tai-raktas- bendravima\/</a>"
    },
    "couch": {
      "title": 'Apie trenerę',
      "imageURL": 'assets/photos/Apie-mus2.png',
      "description": '<p>Rita Žogelė – idėjos autorė ir šokių mokytoja, 2017 metais dalyvavo &quot;Reach for change&quot; organizuojamame konkurse &quot;Talentas keisti 2017&quot; - pateko į finalą ir laimėjo inkubatoriaus paramą savo idėjai &quot;Adaptuoti šokiai specialiųjų poreikių vaikams&quot; plėtoti.</p><p>Dabartinę trenerės veiklą įkvėpė mama, kuri turi psichosocialinę negalią. Anksčiau apie mamos ligą niekam nepasakojusi, bijojusi būti kitokia, vis dėlto išdrįso &quot;Reach for change&quot; konkurso dėka apie tai kalbėti atvirai.</p><p>Trenerė nuolat tobulinasi įvairiuose kursuose.</p>'
    },
    "benefits": {
      "title": 'Nauda',
      "imageURL": 'assets/photos/Apie-mus3.png',
      "description": 'Šiuo metu vaikai vis dažniau pasirenka pasyviai leisti laisvalaikį, prie kompiuterio, todėl labai svarbu nuo pat mažų dienų formuoti sveikos gyvensenos įpročius, aktyvius laisvalaikio praleidimo būdus. Šokiai yra ypatingai aktyvi veikla, kuri gerina širdies darbą, atmintį, nes reikia atsiminti vis daugiau šokių elementų. Gerėja koordinacija, pusiausvyra, orientacija erdvėje, išmokstama pajusti muziką. Šokių metu mokomasi dirbti komandoje, žaidimų metu lavinamas kūrybiškumas, vaizduotė, vaikai įgauna daugiau drąsos, žaidimų metu formuojamos lyderio savybės. Jei pradžioje atėjus vaikui būna nedrąsu prisijungti prie grupės ir šokti kartu, po kelių pamokų (tai priklauso individuliai nuo vaiko, kartais užtrunka ir ilgiau), vaikas įgauna pasitikėjimą savimi ir pradeda šokti kartu su kitais vaikais. Suteikiame galimybę nedrąsiems vaikams pradžioje stebėti grupę, vis padrąsiname, o mokėti galima tik nuo tada kai vaikas prisijungia prie grupės ir pradeda šokti. Svarbiausia, kad vaikas jaustųsi gerai ir justų geras emocijas. Pagal Pasaulio sveikatos organizaciją vaikai per dieną turi mažiausiai 1 val aktyviai judėti, todėl šokiai yra puikus ir įdomus būdas vaiką įraukti į aktyvią veiklą, nes dažnai išmokus naujus šokių judesius juos vaikai patys kartoja namuose.'
    }
  }


  constructor(private modalService: NgbModal) {}

  ngOnInit() {

  }

  showModal(content, sectionName) {
    this.sectionName = sectionName;
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
