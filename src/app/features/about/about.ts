import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
})
export class About {
  readonly platforms = [
    { name: 'YouTube',  url: 'https://www.youtube.com/@gt_gaming_youtube', color: 'bg-red-600 hover:bg-red-700' },
    { name: 'Twitch',   url: 'https://www.twitch.tv/gt_gaming_twitch',     color: 'bg-purple-600 hover:bg-purple-700' },
    { name: 'Kick',     url: 'https://kick.com/gt-gaming-kick',            color: 'bg-green-600 hover:bg-green-700' },
    { name: 'Rumble',   url: 'https://rumble.com/user/GT_Gaming_Rumble',   color: 'bg-orange-500 hover:bg-orange-600' },
  ];

  readonly streamTypes = [
    {
      label: "Let's Play",
      badge: 'bg-primary text-white',
      description: "Full story-driven playthroughs of big RPG titles. Six hours or more per session — start to finish, no cuts.",
      examples: ['Final Fantasy VII', 'Clair Obscur: Expedition 33', 'Divinity: Original Sin', 'Chrono Trigger'],
    },
    {
      label: 'Chill Stream',
      badge: 'bg-blue-600 text-white',
      description: 'Relaxed two-hour sessions for lighter games. Lower stakes, more chat interaction, good vibes.',
      examples: ['Palworld', 'Marvel Cosmic Invasion'],
    },
  ];
}
