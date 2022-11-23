import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss']
})
export class EmailComponent {
  
  data$ = this.apiService.getEmail(this.route.snapshot.paramMap.get('id') || '').pipe(
    map((email: any) => email)
  );

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }
}
