import { Component, OnInit } from '@angular/core';
import { StudentProfileDataService } from '../../../../../services/student-profile-data.service';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-students-profile',
  imports: [SharedModule, CommonModule, RouterLink],
  templateUrl: './students-profile.component.html',
  styleUrl: './students-profile.component.css',
})
export class StudentsProfileComponent implements OnInit {
  student: any;

  constructor(
    private studentProfileDataService: StudentProfileDataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  // constructor(
  //   private friendsDataService: FriendsDataService,
  //   private route: ActivatedRoute,
  //   private location: Location
  // ) {}

  // ngOnInit(): void {
  //   this.friends = this.friendsDataService.getFriends();
  // }

  goBack() {
    this.location.back();
  }
  ngOnInit() {
    this.studentProfileDataService.selectedStudent$.subscribe((student) => {
      this.student = student;
    });
  }
}
