import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  title = "csvTOjson works!";
  text: any;
  JSONData: any;
  csvJSON(csvText) {
    var lines = csvText.split("\n");

    var result = [];

    var headers = lines[0].split(",");
    console.log(headers);
    for (var i = 1; i < lines.length - 1; i++) {
      var obj = {};
      var currentline = lines[i].split(",");

      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }
    //return result; //JavaScript object
    console.log(JSON.stringify(result)); //JSON
    this.JSONData = JSON.stringify(result);
  }

  convertFile(input) {
    const reader = new FileReader();
    reader.readAsText(input.files[0]);
    reader.onload = () => {
      let text = reader.result;
      this.text = text;
      console.log(text);
      this.csvJSON(text);
    };
  }
}
