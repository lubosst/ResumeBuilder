
var bio = {
	name: 'Lubomir Janovicky',
	role: 'Report Specialist',
	contacts: {
		'mobile': '0118 999 881 999 119 725 3',
		'email': 'lubosst@gmail.com',
		'github': 'lubosst',
		'location': 'Slovakia',
	},
	welcomeMessage: 'My online Resume',
	skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'VBA', 'Delphi'],
	bioPic: 'images/profilePhoto.jpg',
	display: function() {
		var formattedName = HTMLheaderName.replace('%data%', bio.name);
		var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
		var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
		var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
		var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
		var formattedBioPic = HTMLbioPic.replace('%data%',bio.bioPic);
		var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage);
		
		$('#header').prepend(formattedName + formattedRole);
		$('#topContacts').append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);
		$('#header').append(formattedBioPic);
		$('#header').append(formattedWelcomeMessage);
		
		if (bio.skills.length > 0) {
			$('#header').append(HTMLskillsStart);
			for (var i = 0; i < bio.skills.length; i++) {
				var formattedSkills = HTMLskills.replace('%data%', bio.skills[i]);
				$('#skills').append(formattedSkills);
			}
		}
	}
};

var education = {
	schools: [
		{
			'name': 'Commenius University',
			'location': 'Bratislava, Slovakia',
			'degree': 'Magister',
			'majors': ['Mathematics', 'Informatics'],
			'dates': '2004-2009',
		}
	],
	onlineCourses: [
		{
			'title': 'Programming Mobile Applications for Android Handheld Systems: Part 1',
			'school': 'University of Maryland, College Park',
			'dates': 'April 2014',
			'url': 'https://www.coursera.org/learn/android-programming'
		}
	],
	display: function() {
		if (education.schools.length > 0) {
			for (var i = 0; i < education.schools.length; i++) {
				var formattedName = HTMLschoolName.replace('%data%', education.schools[i].name);
				var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
				var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
				var formattedDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
				
				$('#education').append(HTMLschoolStart);
				$('.education-entry:last').append(formattedName);
				$('.education-entry:last').append(formattedDegree);
				$('.education-entry:last').append(formattedDates);
				$('.education-entry:last').append(formattedLocation);
				
				if (education.schools[i].majors.length > 0) {
					for (var j = 0; j < education.schools[i].majors.length; j++) {
						var formattedMajors = HTMLschoolMajor.replace('%data%', education.schools[i].majors[j]);
						$('.education-entry:last').append(formattedMajors);
					}
				}
			}
		}
		if (education.onlineCourses.length > 0) {
			for (var i = 0; i < education.onlineCourses.length; i++) {
				var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title);
				var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
				var formattedDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].dates);
				var formattedUrl = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url);
				
				$('#education').append(HTMLschoolStart);
				$('.education-entry:last').append(formattedTitle);
				$('.education-entry:last').append(formattedSchool);
				$('.education-entry:last').append(formattedDates);
				$('.education-entry:last').append(formattedUrl);
			}
		}
	}
};

var work = {
	jobs: [
		{
			'employer': 'Primary School with Kindergarten in Podolie',
			'title': 'Teacher',
			'location': 'Podolie',
			'dates': '2010-2013',
			'description': 'Teaching Mathematics and Informatics. Also work as Admin for school.'
		},
		{
			'employer': 'Primary School in Stará Turá',
			'title': 'Teacher',
			'location': 'Stará Turá',
			'dates': '2013-2015',
			'description': 'Teaching Mathemetics and Informatics.'
		},
		{
			'employer': 'Private Elementary School for Pupils with General Intellectual Talent',
			'title': 'Teacher',
			'location': 'Bratislava',
			'dates': '2015-2016',
			'description': 'Teaching Mathemetics and Informatics.'
		},
		{
			'employer': 'AT&T GNS Slovakia',
			'title': '...',
			'location': 'Bratislava',
			'dates': '2016-until now',
			'description': 'Creating Excel based reports. Creating automation scripts and programms. Creating orders.'
		}
	],
	display: function() {
		if (work.jobs.length > 0) {
			for (var i = 0; i < work.jobs.length; i++) {
				var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
				var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
				var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
				var formattedDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
				var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
				
				$('#workExperience').append(HTMLworkStart);
				$('.work-entry:last').append(formattedEmployer);
				$('.work-entry:last').append(formattedTitle);
				$('.work-entry:last').append(formattedLocation);
				$('.work-entry:last').append(formattedDates);
				$('.work-entry:last').append(formattedDescription);
			}
		}
	}
};

var projects = {
	projects: [
		{
			'title': 'OM scorecard',
			'dates': '09/2017-04/2018',
			'description': 'Microsoft Power BI project. Scoreacrd for Order Managers. Whole project contains also PHP script for uploading data to MySQL database.',
			'images': []
		},
	],
	display: function() {
		if (projects.projects.length > 0) {
			for (var i = 0; i < projects.projects.length; i++) {
				var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
				var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
				var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
				
				$('#projects').append(HTMLprojectStart);
				$('.project-entry:last').append(formattedTitle);
				$('.project-entry:last').append(formattedDates);
				$('.project-entry:last').append(formattedDescription);
				
				for (var j = 0; j < projects.projects[i].images.length; j++) {
					var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[j]);
					$('.project-entry:last').append(formattedImage);
				}
			}
		}
	}
};

bio.display();
education.display();
work.display();
projects.display();
$('#mapDiv').append(googleMap);
