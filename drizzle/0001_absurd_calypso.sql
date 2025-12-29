CREATE TABLE `setting` (
	`guildId` text PRIMARY KEY NOT NULL,
	`playlistLimit` integer DEFAULT 50 NOT NULL,
	`secondsToWaitAfterQueueEmpties` integer DEFAULT 30 NOT NULL,
	`leaveIfNoListeners` integer DEFAULT true NOT NULL,
	`queueAddResponseEphemeral` integer DEFAULT false NOT NULL,
	`autoAnnounceNextSong` integer DEFAULT false NOT NULL,
	`defaultVolume` integer DEFAULT 100 NOT NULL,
	`defaultQueuePageSize` integer DEFAULT 10 NOT NULL,
	`turnDownVolumeWhenPeopleSpeak` integer DEFAULT false NOT NULL,
	`turnDownVolumeWhenPeopleSpeakTarget` integer DEFAULT 20 NOT NULL,
	`createdAt` integer NOT NULL,
	`updatedAt` integer NOT NULL,
	FOREIGN KEY (`guildId`) REFERENCES `discord_guild`(`id`) ON UPDATE no action ON DELETE cascade
);
