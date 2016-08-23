'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.event = {
            name: 'Angular Event',
            date: '08/22/2016',
            time: '10:50 A.M',
            location: {
                address: 'Google HQ',
                city: 'Mountain view',
                province: 'ca'
            },
            imgUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclasses',
                    creatorName: 'Bob Smith',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract:'In this session you will learn the ins and outs of directives'
                },
                {
                    name: 'Scopes for fun amd profit',
                    creatorName: 'John Doe',
                    duration: '30 min',
                    level: 'Introductory',
                    abstract: 'This session will take a closer look at scope. Learn what they do, how they do it, and how to get them to do it for you.'
                },
                {
                    name: 'Well behaved controllers',
                    creatorName: 'John Doe',
                    duration: '2 hr',
                    level: 'Intermediate',
                    abstract: 'Controllers are beginning of every thing Anguler does. Learn how to craft controllers thaat will win the respect of your friends and neighbors.'
                }
            ]
        }


    }
    );