import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'angularfront';

    data: any = '';

    constructor(
        private httpClient: HttpClient
    ) {
        this.getData();
    }

    async getData() {
        let that = this;

        this.httpClient.get('http://localhost:7777/get-data').pipe(map(this.extractData)).subscribe((result: any) => {
            that.data = result && result.data ? result.data : 'Cannot read';
        });
    }

    /*
     *  Extract data from response
     */
    private extractData(res: Response) {
        let body = res;
        return body || {};
    }
}
