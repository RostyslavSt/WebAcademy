'use strict'

//create controller
class MainController {
	constructor(commentsModel) {
		this.comments = [
			{
				author: 'John',
				text: 'consectetur adipisicing elit. Accusantium',
				date: '30.10.2016 in 12.12.12',
				id: 232323232
			},
			{
				author: 'mike',
				text: 'Lorem ipsum dolor sit amet',
				date: '30.10.2016 in 10.11.33',
				id: 5555887878
			}
		];

		this.userName = '';
		this.userComment = '';
		this.model = commentsModel;
		
		this.model
			.fetchComments()
			.then( resp => {
				this.comments = resp.data;
			});
	}

	//push new comment
	addItem() {
		debugger;
		this.model.addComment(this.userName, this.userComment).then(resp => {
			// debugger;
			this.comments.push(resp.data);
		});

		this.userName = '';
		this.userComment = '';
	}
}

//constructor for server
class CommentsModel {
	constructor($http) {
		this.baseUrl = "http://localhost:4001/comments";
		this.$http = $http;
	}

	//to create current date
	currentDate() {
		let time = new Date();
		let stringDate = time.getDate() + '-' + time.getMonth() 
			+ '-' + time.getFullYear() + ' in ' + time.getHours() 
			+ ':' + time.getMinutes() + ':' + time.getSeconds();
		return stringDate;
	}

	fetchComments() {
		return this.$http.get(this.baseUrl);
	}

	addComment(author, text) {
		const newCommentObject = {
			"author": author,
			"text": text,
			"date": this.currentDate()
		};
		return this.$http.post(this.$baseUrl, newCommentObject);
	}
}

//create angular module
angular.module('commentsBlog', [])
	.controller('mainCtrl', MainController)
	.service('commentsModel', CommentsModel);


//my model
		// this.comments = [
		// 	{
		// 		author: 'John',
		// 		text: 'consectetur adipisicing elit. Accusantium',
		// 		date: '30.10.2016 in 12.12.12',
		// 		id: 232323232
		// 	},
		// 	{
		// 		author: 'mike',
		// 		text: 'Lorem ipsum dolor sit amet',
		// 		date: '30.10.2016 in 10.11.33',
		// 		id: 5555887878
		// 	}
		// ];