reminders.html

- onPageLoad 
	* if there are notifications in database
	* load all the previous saved notifications from the database 
- onAddBtnClicked
	* trigger modal
	* let user fill data
- onSubmitBtnClicked
	* check whether details are filled
	* store data in notification database
	* set notification using notification plugin
	* add card and information about notification
	* close notification 