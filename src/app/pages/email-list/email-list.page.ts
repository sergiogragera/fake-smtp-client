import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, map, switchMap } from 'rxjs';
import { Page } from 'src/app/model/page';
import { PageResponse } from 'src/app/services/api.interface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.page.html',
  styleUrls: ['./email-list.page.scss']
})
export class EmailListComponent implements OnDestroy {

  currentPage$ = new BehaviorSubject<number>(0);

  data$ = this.currentPage$.pipe(
    switchMap((currentPage) => 
      this.apiService.getEmails(currentPage)
    ),
    map((page: PageResponse) => new Page(page))
  );

  constructor(private apiService: ApiService) {}

  ngOnDestroy(): void {
   this.currentPage$.complete();
  }

  refresh() {
    this.currentPage$.next(0);
  }

  deleteEmail(id: number) {
    this.apiService.deleteEmail(id).subscribe(
      () => this.currentPage$.next(this.currentPage$.value)
    );
  }

  deleteAllEmails() {
    this.apiService.deleteAllEmails().subscribe(
      () => this.currentPage$.next(this.currentPage$.value)
    );
  }

  nextPage() {
    this.currentPage$.next(this.currentPage$.value + 1);
  }

  prevPage() {
    this.currentPage$.next(this.currentPage$.value - 1);
  }

  goToPage(page: number) {
    this.currentPage$.next(page);
  }
}
