import { Component, ViewChild } from '@angular/core';
import { NavController, Platform, ModalController } from 'ionic-angular';
import { FilterGradeByGradePoint } from '../../app/pipes/filterGradeByGradePoint.pipe';
import { SimulationPage } from '../simulation/simulation';
import { AddTarget } from '../add-target/add-target';
import { Keyboard } from '@ionic-native/keyboard';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{

  @ViewChild('doughnutChart') doughnutChart:any;
	homePageObj = {
		currentSem:1,
		grades:[{ grade_point: 10 , grade:'A+'},
			{ grade_point: 9 , grade:'A'},
			{ grade_point: 8 , grade:'B+'},
			{ grade_point: 7 , grade:'B'},
			{ grade_point: 6 , grade:'C+'},
			{ grade_point: 5 , grade:'C'},
			{ grade_point: 4 , grade:'D'},
			{ grade_point: 0 , grade:'F'}
		],
    credits:[2,8],
		totalSubject:[],
		isCourseInclude:true,
		isSimulationButtonShow:true,
		CGPA: 0,
    semesters: [{
              sem_id: 1,
              sem_name: 'SEM 1',
              sem_sgpa: 0,
              sem_target:'A',
              sem_target_sgpa: 0,
              sem_total_creadit:0,
              subjectList_theory:[{
    						type:'theory',
    				  		subject:'',
                  target:'A',
    				  		grade:'A',
                  credit: 4,
                  sub_rating: 0,
    				  		state:true
    					}],
    					subjectList_practical:[{
    						type:'practical',
    				  		subject:'',
                  target:'A',
    				  		grade:'A',
                  credit: 2,
                  sub_rating: 0,
    				  		state:true
    					}],
              course: [],
              'color'      : 'rgba(206, 61, 95, 0.5)',
              'hover'      : 'rgba(199, 108, 129, 0.5)'
          }, {
              sem_id: 2,
              sem_name: 'SEM 2',
              sem_sgpa: 0,
              sem_target:'A',
              sem_target_sgpa: 0,
              sem_total_creadit:0,
              subjectList_theory:[{
                type:'theory',
                  subject:'',
                  target:'A',
                  grade:'A',
                  credit: 4,
                  sub_rating: 0,
                  state:true
              }],
              subjectList_practical:[{
                type:'practical',
                  subject:'',
                  target:'A',
                  grade:'A',
                  credit: 2,
                  sub_rating: 0,
                  state:true
              }],
                course: [],
                'color'      : 'rgba(83, 131, 185, 0.5)',
                'hover'      : 'rgba(122, 160, 202, 0.5)'
            }, {
                sem_id: 3,
                sem_name: 'SEM 3',
                sem_sgpa: 0,
                sem_target:'A',
                sem_target_sgpa: 0,
                sem_total_creadit:0,
                subjectList_theory:[{
                type:'theory',
                  subject:'',
                  target:'A',
                  grade:'A',
                  credit: 4,
                  sub_rating: 0,
                  state:true
              }],
              subjectList_practical:[{
                type:'practical',
                  subject:'',
                  target:'A',
                  grade:'A',
                  credit: 2,
                  sub_rating: 0,
                  state:true
              }],
              course: [],
              'color'      : 'rgba(198, 147, 194, 0.5)',
              'hover'      : 'rgba(200, 166, 197, 0.5)'
          }, {
              sem_id: 4,
              sem_name: 'SEM 4',
              sem_sgpa: 0,
              sem_target:'A',
              sem_target_sgpa: 0,
              sem_total_creadit:0,
              subjectList_theory:[{
                type:'theory',
                  subject:'',
                  target:'A',
                  grade:'A',
                  credit: 4,
                  sub_rating: 0,
                  state:true
              }],
              subjectList_practical:[{
                type:'practical',
                  subject:'',
                  target:'A',
                  grade:'A',
                  credit: 2,
                  sub_rating: 0,
                  state:true
              }],
              course: [],
              'color'      : 'rgba(54, 116, 152, 0.5)',
              'hover'      : 'rgba(103, 139, 160, 0.5)'
          },{
              sem_id: 5,
              sem_name: 'SEM 5',
              sem_sgpa: 0,
              sem_target:'A',
              sem_target_sgpa: 0,
              sem_total_creadit:0,
              subjectList_theory:[{
                type:'theory',
                  subject:'',
                  target:'A',
                  grade:'A',
                  credit: 4,
                  sub_rating: 0,
                  state:true
              }],
              subjectList_practical:[{
                type:'practical',
                  subject:'',
                  target:'A',
                  grade:'A',
                  credit: 2,
                  sub_rating: 0,
                  state:true
              }],
              course: [],
              'color'      : 'rgba(152, 54, 145, 0.5)',
              'hover'      : 'rgba(152, 89, 149, 0.5)'
          }, {
              sem_id: 6,
              sem_name: 'SEM 6',
              sem_sgpa: 0,
              sem_target:'A',
              sem_target_sgpa: 0,
              sem_total_creadit:0,
              subjectList_theory:[{
                type:'theory',
                  subject:'',
                  target:'A',
                  grade:'A',
                  credit: 4,
                  sub_rating: 0,
                  state:true
              }],
              subjectList_practical:[{
                type:'practical',
                  subject:'',
                  target:'A',
                  grade:'A',
                  credit: 2,
                  sub_rating: 0,
                  state:true
              }],
              course: [],
              'color'      : 'rgba(192, 192, 192, 0.5)',
              'hover'      : 'rgba(220, 220, 220, 0.5)'
          }, {
              sem_id: 7,
              sem_name:'SEM 7',
              sem_sgpa: 0,
              sem_target:'A',
              sem_target_sgpa: 0,
              sem_total_creadit:0,
              subjectList_theory:[{
                type:'theory',
                  subject:'',
                  target:'A',
                  grade:'A',
                  credit: 4,
                  sub_rating: 0,
                  state:true
              }],
              subjectList_practical:[{
                type:'practical',
                  subject:'',
                  target:'A',
                  grade:'A',
                  credit: 2,
                  sub_rating: 0,
                  state:true
              }],
              course: [],
              'color'      : 'rgba(152, 54, 145, 0.5)',
              'hover'      : 'rgba(152, 89, 149, 0.5)'
          }, {
              sem_id: 8,
              sem_name: 'SEM 8',
              sem_sgpa: 0,
              sem_target:'A',
              sem_target_sgpa: 0,
              sem_total_creadit:0,
              subjectList_theory:[{
                type:'theory',
                  subject:'',
                  target:'A',
                  grade:'A',
                  credit: 4,
                  sub_rating: 0,
                  state:true
              }],
              subjectList_practical:[{
                type:'practical',
                  subject:'',
                  target:'A',
                  grade:'A',
                  credit: 2,
                  sub_rating: 0,
                  state:true
              }],
              course: [],
              'color'      : 'rgba(192, 192, 192, 0.5)',
              'hover'      : 'rgba(220, 220, 220, 0.5)'
          }],
          marks_margin: 0

	}
	
	filterPipe: FilterGradeByGradePoint;

  constructor(public navCtrl: NavController,
    private keyboard: Keyboard,
    private platform: Platform,
    public modalCtrl: ModalController) {
    if(localStorage.getItem('grade_calacRecord')){
      this.homePageObj = JSON.parse(localStorage.getItem('grade_calacRecord'));
    }
  	platform.ready().then(() => {
  		keyboard.onKeyboardShow().subscribe(() => {
	  		this.homePageObj.isSimulationButtonShow = false;
		   console.log("onKeyboardShow");
		});
		keyboard.onKeyboardHide().subscribe(() => {
	  		this.homePageObj.isSimulationButtonShow = true;
		   console.log("onKeyboardShow");
		});
  	});
  }
 
  ionViewDidEnter(){
    this.getSelectedData('grade');
    this.getSelectedData('target');
  }
  
  addTheorySubject(){
  	this.homePageObj.semesters[this.homePageObj.currentSem - 1].subjectList_theory.push({
      type:'theory',
      subject:'',
      target:this.homePageObj.semesters[this.homePageObj.currentSem - 1].sem_target,
      grade:'A',
      credit: 4,
      sub_rating: 0,
      state:true
    });
    this.getSelectedData('grade');
    this.getSelectedData('target');
  }
  addPracticalSubject(){
  	this.homePageObj.semesters[this.homePageObj.currentSem - 1].subjectList_practical.push({
      type:'theory',
      subject:'',
      target:this.homePageObj.semesters[this.homePageObj.currentSem - 1].sem_target,
      grade:'A',
      credit: 2,
      sub_rating: 0,
      state:true
    });
    this.getSelectedData('grade');
    this.getSelectedData('target');
  }
  getSelectedData(calculateType){
    let theory = this.homePageObj.semesters[this.homePageObj.currentSem - 1].subjectList_theory;
    let practical = this.homePageObj.semesters[this.homePageObj.currentSem - 1].subjectList_practical;
    let selectedSubject = practical.concat(theory);
    if(calculateType == 'grade'){
      this.calculateSGPA(selectedSubject);
      this.calculateCGPA();    
      setTimeout(()=>{
        this.checkIncreaseOrDecrese(this.homePageObj.semesters[this.homePageObj.currentSem - 1]);  
      }, 100);
    }else{
      this.calculateTargetSGPA(selectedSubject);
      setTimeout(()=>{
        this.checkIncreaseOrDecrese(this.homePageObj.semesters[this.homePageObj.currentSem - 1]);  
      }, 100);
    }
    localStorage.setItem('grade_calacRecord', JSON.stringify(this.homePageObj));
  }
  checkIncreaseOrDecrese(sem){
    let sub_rating = sem.sem_sgpa - sem.sem_target_sgpa;
    this.homePageObj.marks_margin = parseFloat(Math.abs(sub_rating).toFixed(2));
    if(sub_rating < 0){
      this.homePageObj.marks_margin = this.homePageObj.marks_margin *(-1);
    }
      if(sub_rating > 0){
        this.defineChartData('increase');
        return 'increase';
      }else if(sub_rating < 0){
        this.defineChartData('decrease');
        return 'decrease';
      }else if(sub_rating == 0){
        this.defineChartData('stable');
        return 'stable';
      }
    }



  calculateTargetSGPA(selectedSubject){
    let averageUpper:number = 0;
    let averagePracticalLower: number = 0;
    let averageTheoryLower: number = 0;
    for (var subjIncr = 0; subjIncr < selectedSubject.length; subjIncr++) {
      let gradeValue:any = this.homePageObj.grades.filter((data)=>
        data.grade == selectedSubject[subjIncr].target);
      /* start calculation for subject rating*/ 
      let targetValue:any = this.homePageObj.grades.filter((data)=>
        data.grade == selectedSubject[subjIncr].grade);
        selectedSubject[subjIncr].sub_rating = parseInt(targetValue[0].grade_point) - parseInt(gradeValue[0].grade_point);
      /* End calculation for subject rating*/  
      if(selectedSubject[subjIncr].type == 'theory'){
        averageUpper += parseInt(gradeValue[0].grade_point) * 4 ;
        averageTheoryLower += 4;
      }else{
        averageUpper += parseInt(gradeValue[0].grade_point) * parseInt(selectedSubject[subjIncr].credit) ;
        averagePracticalLower += parseInt(selectedSubject[subjIncr].credit);
      }
    }

    this.homePageObj.semesters[this.homePageObj.currentSem - 1].sem_total_creadit = (averageTheoryLower + averagePracticalLower);
    if(averageUpper != 0  || (averageTheoryLower + averagePracticalLower) != 0){
      let avgTotal = averageUpper/(averageTheoryLower + averagePracticalLower);
      this.homePageObj.semesters[this.homePageObj.currentSem - 1].sem_target_sgpa = Math.round(avgTotal*100)/100;  
    }else{
      this.homePageObj.semesters[this.homePageObj.currentSem - 1].sem_target_sgpa = 0;
    }
  }

  removeTheorySubject(i){
  	this.homePageObj.semesters[this.homePageObj.currentSem - 1].subjectList_theory.splice(i,1);
    this.getSelectedData('grade');
    this.getSelectedData('target');
  }
  removePracticalSubject(i){
  	this.homePageObj.semesters[this.homePageObj.currentSem - 1].subjectList_practical.splice(i,1);
    this.getSelectedData('grade');
    this.getSelectedData('target');
  }
  
  calculateSGPA(selectedSubject){
  	let averageUpper:number = 0;
    let averagePracticalLower: number = 0;
    let averageTheoryLower: number = 0;
  	for (var subjIncr = 0; subjIncr < selectedSubject.length; subjIncr++) {
  		let gradeValue:any = this.homePageObj.grades.filter((data)=>
	    	data.grade == selectedSubject[subjIncr].grade);

      /* start calculation for subject rating*/ 
      let targetValue:any = this.homePageObj.grades.filter((data)=>
        data.grade == selectedSubject[subjIncr].target);
        selectedSubject[subjIncr].sub_rating = parseInt(gradeValue[0].grade_point) - parseInt(targetValue[0].grade_point);
      /* End calculation for subject rating*/  
  		if(selectedSubject[subjIncr].type == 'theory'){
		    averageUpper += parseInt(gradeValue[0].grade_point) * 4 ;
        averageTheoryLower += 4;
  		}else{
  			averageUpper += parseInt(gradeValue[0].grade_point) * parseInt(selectedSubject[subjIncr].credit) ;
        averagePracticalLower += parseInt(selectedSubject[subjIncr].credit);
  		}
  	}

  	this.homePageObj.semesters[this.homePageObj.currentSem - 1].sem_total_creadit = (averageTheoryLower + averagePracticalLower);
    if(averageUpper != 0  || (averageTheoryLower + averagePracticalLower) != 0){
      let avgTotal = averageUpper/(averageTheoryLower + averagePracticalLower);
      this.homePageObj.semesters[this.homePageObj.currentSem - 1].sem_sgpa = Math.round(avgTotal*100)/100;  
    }else{
      this.homePageObj.semesters[this.homePageObj.currentSem - 1].sem_sgpa = 0;
    }
  }
	calculateCGPA(){
		let averageUpper:number = 0;
		let averageLower:number = 0;
		for (var i = 0; i < this.homePageObj.semesters.length; i++) {
			if(this.homePageObj.semesters[i].sem_sgpa > 0){
				averageLower += this.homePageObj.semesters[i].sem_total_creadit;
				averageUpper += this.homePageObj.semesters[i].sem_sgpa * this.homePageObj.semesters[i].sem_total_creadit ;
			}
		}
    if(averageUpper != 0 || averageLower != 0){
      this.homePageObj.CGPA = Math.round(((averageUpper/averageLower) * 100))/100;
    }else{
      this.homePageObj.CGPA = 0;
    }
		
	}

	increaseSem(){
		if(this.homePageObj.currentSem < 8){
  		this.homePageObj.currentSem ++;
  	}
  	if(this.homePageObj.semesters[this.homePageObj.currentSem - 1].subjectList_theory.length == 0){
  		this.homePageObj.semesters[this.homePageObj.currentSem - 1].subjectList_theory = [{
      type:'theory',
      subject:'',
      target:this.homePageObj.semesters[this.homePageObj.currentSem - 1].sem_target,
      grade:'A',
      credit: 4,
      sub_rating: 0,
      state:true
    }];
		this.homePageObj.semesters[this.homePageObj.currentSem - 1].subjectList_practical = [{
      type:'theory',
      subject:'',
      target:this.homePageObj.semesters[this.homePageObj.currentSem - 1].sem_target,
      grade:'A',
      credit: 2,
      sub_rating: 0,
      state:true
    }];	
  	}
    this.getSelectedData('grade');
    this.getSelectedData('target');
  	
	}
  	
 	decreaseSem(){
	  	if(this.homePageObj.currentSem != 0){
	  		this.homePageObj.currentSem --;
	  	}
      this.getSelectedData('grade');
      this.getSelectedData('target');
	}
  gotoSimulation(){
    
  	this.navCtrl.push(SimulationPage, {
      item: this.homePageObj
    });
  }
  checkArrowStatus(sub_rating){
    if(sub_rating > 0){
      return 'increase';
    }else if(sub_rating < 0){
      return 'decrease';
    }else if(sub_rating == 0){
      return 'stable';
    }
  }
  
  AddTarget() {
   let profileModal = this.modalCtrl.create(AddTarget, this.homePageObj);
   profileModal.onDidDismiss(data => {
     this.homePageObj.semesters = data;
      this.getSelectedData('grade');
      this.getSelectedData('target');
   });
   profileModal.present();
 }

 /**
    *
    * Parse the JSON data, push specific keys into selected arrays for use with
    * each chart
    *
    */
    public doughnutChartEl : any;
   public sgpaGraphData : any;
   public chartValues               : any    = [];
   public chartColours              : any    = [];
   public chartBackgroundColor : any = [];
   defineChartData(type)
   { 
     if(this.doughnutChartEl){
       this.doughnutChartEl.chart.config.data.datasets[0].data = [];  
       this.doughnutChartEl.chart.config.data.datasets[0].backgroundColor = [];  
       this.doughnutChartEl.chart.config.data.datasets[0].hoverColor = [];  
     }
     switch (type) {
       case "stable":
         let SGPA_static = this.homePageObj.semesters[this.homePageObj.currentSem - 1].sem_target_sgpa;
         let remainingMarks_static = parseFloat(Math.abs(10 - SGPA_static).toFixed(2)); 
         let chartValues_static = [SGPA_static, remainingMarks_static];
         let chartBackgroundColor_static = [
                        "#3555f4", // blue
                        "#ffffff" //white
                    ];
          let hover_static = [
                        "#3555f4", // blue
                        "#ffffff" //white
                    ];
          let label = ['Remaining', 'Target'];
          
            this.createDoughnutChart(label,chartValues_static, chartBackgroundColor_static, hover_static );
          
         break;
       case "increase":
         let SGPA_increase_target = this.homePageObj.semesters[this.homePageObj.currentSem - 1].sem_target_sgpa;
         let actual_increase = this.homePageObj.semesters[this.homePageObj.currentSem - 1].sem_sgpa;
         let incr_part =  parseFloat(Math.abs(actual_increase - SGPA_increase_target).toFixed(2)); 
         let remainingMarks_increase = parseFloat(Math.abs(10 - actual_increase).toFixed(2)); 
         let chartValues_increase = [SGPA_increase_target, incr_part, remainingMarks_increase];
         let hover_increase = [
                        "#3555f4", // blue
                        "#00d61c", //green
                        "#ffffff" //white
                    ];
         let chartBackgroundColor_increase = [
                        "#3555f4", // blue
                        "#00d61c", //green
                        "#ffffff" //white
                    ];
          
            this.createDoughnutChart(label,chartValues_increase, chartBackgroundColor_increase, hover_increase );
          
         break;
       case "decrease":
         let SGPA_decrease_target = this.homePageObj.semesters[this.homePageObj.currentSem - 1].sem_target_sgpa;
         let actual_decrease = this.homePageObj.semesters[this.homePageObj.currentSem - 1].sem_sgpa;
         let decr_part =  parseFloat(Math.abs(SGPA_decrease_target - actual_decrease).toFixed(2));
         let remainingMarks_decrease = parseFloat(Math.abs(10 - SGPA_decrease_target).toFixed(2));
         let chartValues_decrease = [SGPA_decrease_target, decr_part, remainingMarks_decrease];
         let hover_decrease = [
                        "#3555f4", // blue
                        "#f22121", //red
                        "#ffffff" //white
                    ];
         let chartBackgroundColor_decrese = [
                        "#3555f4", // blue
                        "#f22121", //red
                        "#ffffff" //white
                    ];
          
            this.createDoughnutChart(label,chartValues_decrease, chartBackgroundColor_decrese, hover_decrease );
                              
         break;
       default:
         // code...
         break;
     }
     
   }

  /**
    *
    * Configure the Bar chart, define configuration options
    *
    */
   createDoughnutChart(label, _data, backGround, hovercolor)
   {
     
     if(this.doughnutChart){
        this.doughnutChartEl = new Chart(this.doughnutChart.nativeElement,
      {
         type: 'doughnut',
         data:  {
            datasets: [{
                  data: _data,
                  backgroundColor: backGround,
                  hoverBackgroundColor: hovercolor
                }],
        },
         options: {
            
            display:true,
            cutoutPercentage:80,
            segmentShowStroke: false,
            animation:{
              animateRotate:false
            },
            title:{
              /*display:true,
              padding:3,
              text:'Target '+ this.homePageObj.semesters[this.homePageObj.currentSem - 1].sem_target_sgpa*/
            },
            hover:{
              intercept:false
            },
            elements:{
              arc:{
                backgroundColor:"rgba(0,0,0,0.1)",
                borderColor:"#fff",
                borderWidth:0
              }
            }
          }
      });
      this.doughnutChartEl.animating = false ;
     }
      
   }

}