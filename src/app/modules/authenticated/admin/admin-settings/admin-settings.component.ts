import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface PlatformSettings {
  platformName: string;
  platformUrl: string;
  supportEmail: string;
  defaultTimeZone: string;
  language: string;
  maintenanceMode: boolean;
}

export interface SecuritySettings {
  twoFactorAuth: boolean;
  platformUrl: string;
  supportEmail: string;
  sessionTimeout: number;
  maxFailedAttempts: number;
  language: string;
  autoLogout: boolean;
}

export interface NotificationSettings {
  email: boolean;
  phone: boolean;
  newUserRegistrations: boolean;
  paymentAlerts: boolean;
  systemAlerts: boolean;
  alertEmail: string;
  alertPhone: string;
}

export interface PaymentSettings {
  defaultCurrency: string;
  platformCommission: number;
  minimumWithdrawal: number;
  autoApproveWithdrawals: boolean;
}

export interface EmailTemplate {
  subject: string;
  content: string;
}

@Component({
  selector: 'app-admin-settings',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-settings.component.html',
  styleUrl: './admin-settings.component.css',
})
export class AdminSettingsComponent {
  timeZones = [
    'West Africa time zone',
    'Eastern Standard Time',
    'Pacific Standard Time',
    'Central Standard Time',
  ];

  languages = ['English', 'Spanish', 'French', 'German'];

  sessionTimeouts = [
    { label: '30 minutes', value: 30 },
    { label: '1 hour', value: 60 },
    { label: '2 hours', value: 120 },
    { label: '4 hours', value: 240 },
  ];

  maxAttempts = [
    { label: '3', value: 3 },
    { label: '5', value: 5 },
    { label: '10', value: 10 },
  ];

  currencies = [
    { label: 'Naira', value: 'NGN', symbol: '₦' },
    { label: 'Dollar', value: 'USD', symbol: '$' },
    { label: 'Euro', value: 'EUR', symbol: '€' },
  ];

  platformSettings: PlatformSettings = {
    platformName: 'FlexiDemy',
    platformUrl: 'https://flexidemy.com',
    supportEmail: 'support@flexidemy.com',
    defaultTimeZone: 'West Africa time zone',
    language: 'English',
    maintenanceMode: false,
  };

  securitySettings: SecuritySettings = {
    twoFactorAuth: true,
    platformUrl: 'https://flexidemy.com',
    supportEmail: 'support@flexidemy.com',
    sessionTimeout: 30,
    maxFailedAttempts: 5,
    language: 'English',
    autoLogout: true,
  };

  notificationSettings: NotificationSettings = {
    email: true,
    phone: true,
    newUserRegistrations: true,
    paymentAlerts: true,
    systemAlerts: true,
    alertEmail: 'admin@flexidemy.com',
    alertPhone: '+234009374644659',
  };

  paymentSettings: PaymentSettings = {
    defaultCurrency: 'NGN',
    platformCommission: 10,
    minimumWithdrawal: 50000,
    autoApproveWithdrawals: true,
  };

  welcomeEmailTemplate: EmailTemplate = {
    subject: "Welcome to FlexiDemy - Let's Make Learning Easier!",
    content: `Hi [First Name],

Welcome to FlexiDemy - we're excited to have you on board!
You didn't come to our way by chance. With access to top-rated tutors, personalized sessions, and flexible scheduling, you're in for an incredible learning experience.

Here is how to get started:
🌟 Book your first session
🌟 Explore tutor profiles
🌟 Set your learning goals
🌟 Join our support group

Our dedicated customer support team is always here for you.
Let's build a better way to learn - together.

Warm regards,
The FlexiDemy Team`,
  };

  alertEmailTemplate: EmailTemplate = {
    subject: 'Reminder: Your Upcoming FlexiDemy Session',
    content: `Hi [First Name],

This is a quick reminder that you have a learning session coming up!

📚 Date: [Insert Date]
⏰ Time: [Insert Time]
📍 Tutor: [Tutor Name]
🎯 Location: FlexiDemy Online Classroom

Please make sure your camera is charged and connected to the internet before the session starts.

Need to reschedule? It's all here!
Looking forward to a great session!

Cheers,
The FlexiDemy Team`,
  };

  onSaveChanges(): void {
    // Implement save logic
    console.log('Settings saved:', {
      platform: this.platformSettings,
      security: this.securitySettings,
      notifications: this.notificationSettings,
      payment: this.paymentSettings,
      emailTemplates: {
        welcome: this.welcomeEmailTemplate,
        alert: this.alertEmailTemplate,
      },
    });
  }

  onResetToDefaults(): void {
    // Reset all settings to default values
    console.log('Settings reset to defaults');
  }
}
