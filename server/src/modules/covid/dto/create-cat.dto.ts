import { IsInt, IsString, isDate, isDateString } from 'class-validator';

export class CovidDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;
}



export class CovidStateDto {

  @IsInt()
  readonly date: number;

  @IsString()
  readonly state: string;

  @IsInt()
  readonly positive: number;

  readonly probableCases: string;

  @IsInt()
  readonly negative?: number;


  readonly pending?: number;

  readonly totalTestResultsSource: string;

  @IsInt()
  readonly totalTestResults?: number;

  @IsInt()
  readonly hospitalizedCurrently?: number;
  
  @IsInt()
  readonly hospitalizedCumulative?: number;
  
  @IsInt()
  readonly inIcuCurrently?: number;
  
  @IsInt()
  readonly inIcuCumulative?: number;

  @IsInt()
  readonly onVentilatorCurrently?: number;

  @IsInt()
  readonly onVentilatorCumulative?: number;

  @IsInt()
  readonly recovered?: number;

  readonly dataQualityGrade: string;
  
  // @isDateString()
  // readonly lastUpdateEt: string;

  // @isDateString()
  // readonly dateModified: string;

  // @isDateString()
  // readonly checkTimeEt: string;

  // @IsInt()
  // readonly death?: number;

  // @IsInt()
  // readonly hospitalized?: number;
  // @IsInt()
  // readonly ?: number;
  
  // @isDateString()
  // readonly dateChecked: string;

  // readonly : string;
  // readonly : string;
  // readonly : string;
  // readonly : string;



  // "":null,"":7165,"":"A","":"12/31/2020 03:59","":"2020-12-31T03:59:00Z","":"12/30 22:59","":206,"":1023,"":"2020-12-31T03:59:00Z",
  // "totalTestsViral":1275750,"positiveTestsViral":54763,"negativeTestsViral":1219592,"positiveCasesViral":null,"deathConfirmed":206,"deathProbable":null,"totalTestEncountersViral":null,"totalTestsPeopleViral":null,"totalTestsAntibody":null,"positiveTestsAntibody":null,"negativeTestsAntibody":null,"totalTestsPeopleAntibody":null,"positiveTestsPeopleAntibody":null,"negativeTestsPeopleAntibody":null,"totalTestsPeopleAntigen":null,"positiveTestsPeopleAntigen":null,"totalTestsAntigen":null,"positiveTestsAntigen":null,"fips":"02","positiveIncrease":495,"negativeIncrease":8163,"total":1275750,"totalTestResultsIncrease":8658,"posNeg":1275750,"deathIncrease":3,"hospitalizedIncrease":6,"hash":"2d506c6593cc8e3c2dab997a6f7f7ccf9177dada","commercialScore":0,"negativeRegularScore":0,"negativeScore":0,"positiveScore":0,"score":0,"grade":""},
  // "date": 20201231,
  // "state": "AK",
  // "positive": 45461, "": null, "": 1230289,
  // "": null,
  // "": "totalTestsViral",
  // "": 1275750,
  // "": 79, "": 1023,
  // "": null, "inIcuCumulative": null,
  // "onVentilatorCurrently": 6, "onVentilatorCumulative": null,
  // "recovered": 7165,
  // "dataQualityGrade": "A",
  // "lastUpdateEt": "12/31/2020 03:59",
  // "dateModified": "2020-12-31T03:59:00Z",
  // "checkTimeEt": "12/30 22:59",
  // "death": 206,
  // "hospitalized": 1023,
  // "dateChecked": "2020-12-31T03:59:00Z",
  // "totalTestsViral": 1275750, "positiveTestsViral": 54763,
  // "negativeTestsViral": 1219592,
  // "positiveCasesViral": null, "deathConfirmed": 206, "deathProbable": null,
  // "totalTestEncountersViral": null,
  // "totalTestsPeopleViral": null, "totalTestsAntibody": null, "positiveTestsAntibody": null, "negativeTestsAntibody": null,
  // "totalTestsPeopleAntibody": null, "positiveTestsPeopleAntibody": null,
  // "negativeTestsPeopleAntibody": null,
  // "totalTestsPeopleAntigen": null, "positiveTestsPeopleAntigen": null,
  // "totalTestsAntigen": null,
  // "positiveTestsAntigen": null, "fips": "02",
  // "positiveIncrease": 495, "negativeIncrease": 8163, "total": 1275750, "totalTestResultsIncrease": 8658,
  // "posNeg": 1275750, "deathIncrease": 3,
  // "hospitalizedIncrease": 6, "hash": "2d506c6593cc8e3c2dab997a6f7f7ccf9177dada", "commercialScore": 0, "negativeRegularScore": 0, "negativeScore": 0,
  // "positiveScore": 0, "score": 0,
  // "grade": ""
}