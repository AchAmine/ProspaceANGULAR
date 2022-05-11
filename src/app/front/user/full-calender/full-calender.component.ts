import { Component, OnInit } from '@angular/core';
import { CalendarOptions,
  Calendar,
 
  DateSelectArg,
  EventApi,
  EventInput,
  FullCalendarComponent } from '@fullcalendar/angular';
import { Formation } from 'src/app/model/Formation';
import { FormationService } from 'src/app/service/formation.service';

@Component({
  selector: 'app-full-calender',
  templateUrl: './full-calender.component.html',
  styleUrls: ['./full-calender.component.css']
})
export class FullCalenderComponent implements OnInit {

  formation:Formation[];
  public calendarOptions: CalendarOptions;
  public page_title:string;
 
  public status:string;
  public dates:any;
  public date:any;



  eventsCalendar: any[] = [];
  events: any[] = [];
  calendarEvents: EventInput[] = [];
  calendarApi: Calendar;
  initialized = false;
  
  //f:any;
  constructor(private formationService:FormationService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.formationService.getCurrentUserFormation().subscribe(
        (response:any) => {
  
          this.dates = response;
          console.log(this.dates);
          this.dates.forEach((f:any) => {
            let calendarevent = {
  
              title: f.subject,
              start: new Date(f.startsAt).toISOString(),
                end:new Date(f.endsAt).toISOString()
            };
            console.log(calendarevent);
            this.eventsCalendar.push(calendarevent);
          });
          this.calendarEvents =  this.eventsCalendar;
          console.log(this.eventsCalendar);
        });
      }, 2200);
      setTimeout(() => {
          this.calendarOptions = {
  
  
            displayEventTime: false,
            initialView: 'dayGridMonth',
            
  
            events:this.eventsCalendar,
          };
        }, 2500);
  
    
    this.formation=[{
      idFormation:null,
      subject:null,
      endsAt:null,
      startsAt:null,
      createdAt:null,
      
      
          }]
          
          
          this.getCurrentUserFormations();
         // this.handleEvents();

  }
 
 

  
  getCurrentUserFormations(){
    this.formationService.getCurrentUserFormation().subscribe((data)=>{
      this.formation=data;
      
    })
  }
  

}
