import { Component, OnInit ,HostListener,OnDestroy} from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { NavigationStart, Router } from '@angular/router';

@Component({
    selector: "Keranjang",
    moduleId: module.id,
    templateUrl: "./keranjang.component.html"
})
export class KeranjangComponent implements OnInit , OnDestroy{
  private routeSub:any; 
  slidetext: string = "Hari Gizi Nasional";
  slideindex: number = 0;
  index: number = 0;
  slideid: number = 0;
  image: string = "~/app/asset/image.jpg";
  image2: string = "~/app/asset/image.jpg";
  tries = 0;
  masak = [{
          id: 0,
          image: "~/app/asset/gas.jpg",
          text: "GAS LPG 3 KG",
          harga: 20000
      },
      {
          id: 1,
          image: "~/app/asset/minyak.jpg",
          text: "MINYAK KELAPA 500ML",
          harga: 20000
      },
      {
          id: 2,
          image: "~/app/asset/panci.jpg",
          text: "PANCI",
          harga: 50000
      },
      {
          id: 3,
          image: "~/app/asset/wajan.jpg",
          text: "WAJAN",
          harga: 55000
      }
  ];
  bersih = [{
      id: 0,
      image: "~/app/asset/molto.jpg",
      text: "MOLTO 220ML",
      harga: 2000
  },
  {
      id: 1,
      image: "~/app/asset/sunlight.jpg",
      text: "SUNLIGHT 250ML",
      harga: 1000
  },
  {
      id: 2,
      image: "~/app/asset/downy.jpg",
      text: "DOWNY 500ML",
      harga: 2500
  },
  {
      id: 3,
      image: "~/app/asset/sapu.jpg",
      text: "SAPU",
      harga: 10000
  }
  ];
  jajan = [{
      id: 0,
      image: "~/app/asset/beng.jpg",
      text: "BENG-BENG 150GR",
      harga: 2000
  },
  {
      id: 1,
      image: "~/app/asset/kopi.jpg",
      text: "KOPI KAPAL API 100GR",
      harga: 1500
  },
  {
      id: 2,
      image: "~/app/asset/aqua.jpg",
      text: "AQUA 500ML",
      harga: 3000
  },
  {
      id: 3,
      image: "~/app/asset/rokok.jpg",
      text: "ROKOK MAGNUM",
      harga: 20000
  }
  ];
  private scrollableHeight;
  interval:any;

  constructor(private page: Page, private router: Router ) {
      
  }

  

  ngOnInit(): void {
      this.routeSub = this.router.events.subscribe((event) => {
          if (event instanceof NavigationStart) {
            // save your data
          }
      });
  }
  

  @HostListener('unloaded')
  public ngOnDestroy() {
      this.routeSub.unsubscribe();
  }

  formatuang(harga){
      var p = Number(harga).toFixed(0).split(".");
      return p[0].split("").reverse().reduce(function(acc, num, i) {
          return  num=="-" ? acc : num + (i && !(i % 3) ? "." : "") + acc;
      }, "");
  }

}
