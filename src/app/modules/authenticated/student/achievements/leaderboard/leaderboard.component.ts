import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface User {
  rank: string;
  username: string;
  points: string;
  // Add other properties as needed
}

interface Column {
  key: keyof User; // This ensures key is a property of User
  header: string;
}

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css',
})
export class LeaderboardComponent {
  users: User[] = [
    { rank: '1st', username: 'Mustapha Rahemat', points: '100,000' },
    { rank: '2nd', username: 'Kolapo Johnson', points: '100,000' },
    { rank: '3rd', username: 'Lekan Pumpy', points: '100,000' },
    { rank: '4th', username: 'Anifoowse Jubril', points: '100,000' },
    { rank: '5th', username: 'Mustapha Rahemat', points: '100,000' },
    { rank: '6th', username: 'Mustapha Rahemat', points: '100,000' },
    { rank: '7th', username: 'Mustapha Rahemat', points: '100,000' },
    { rank: '8th', username: 'Mustapha Rahemat', points: '100,000' },
    { rank: '9th', username: 'Mustapha Rahemat', points: '100,000' },
    { rank: '10th', username: 'Mustapha Rahemat', points: '100,000' },
  ];

  columns: Column[] = [
    { key: 'rank', header: 'Rank' },
    { key: 'username', header: 'Username' },
    { key: 'points', header: 'Points' },
  ];

  getRankClass(rank: string): string {
    switch (rank.toLowerCase()) {
      case '1st':
        return ' text-[#22C55E]';
      case '2nd':
        return ' text-[#9F29E8]';
      case '3rd':
        return ' text-[#FFCC00] ';
      case '4th':
        return ' text-[#F98550] ';
      default:
        return ' text-gray-600';
    }
  }

  getUserProperty(user: User, key: keyof User): string {
    return user[key];
  }
}
