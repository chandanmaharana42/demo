import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  clicked:number = 10;
  menuItems:any[]=[
    {
      name:"Notifications",
      icon:"../../assets/icons/bell.png"
    },
    {
      name:"Home",
      icon:"../../assets/icons/home.png"
    },
    {
      name:"Productions",
      icon:"../../assets/icons/boxes.png"
    },
    {
      name:"Reports",
      icon:"../../assets/icons/report.png"
    },
    {
      name:"Planning",
      icon:"../../assets/icons/thinking.png"
    },
    {
      name:"Finance",
      icon:"../../assets/icons/rupee.png"
    }

  ];
  notiList=[{
    icon:"../../assets/icons/home.png",
    message:"Mirza added docuements in the workspace of production"
  },
  {
    icon:"../../assets/icons/boxes.png",
    message:"Mirza added docuements in the workspace of production"
  },
  {
    icon:"../../assets/icons/report.png",
    message:"Mirza added docuements in the workspace of production"
  },
  {
    icon:"../../assets/icons/thinking.png",
    message:"Mirza added docuements in the workspace of production"
  },
  {
    icon:"../../assets/icons/thinking.png",
    message:"Mirza added docuements in the workspace of production"
  },
  {
    icon:"../../assets/icons/thinking.png",
    message:"Mirza added docuements in the workspace of production"
  },
  
]
profileClicked:boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  checkClicked(i:number){
    if(this.clicked == 10){
      this.clicked = i;
    }else
    this.clicked = 10;
    
  }
  logout(){
    localStorage.removeItem('user');
    alert("Signing out !!!");
    this.router.navigate(['/login']);
  }
}
