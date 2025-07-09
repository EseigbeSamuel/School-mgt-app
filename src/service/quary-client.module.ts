import { NgModule } from '@angular/core';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { QueryService } from './quary.service';

@NgModule({
  providers: [provideHttpClient(withInterceptorsFromDi()), QueryService],
})
export class QueryClientModule {}
