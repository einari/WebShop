function Subscriber(messageType, callback) {
	this.messageType = messageType;
	this.callback = callback;
}

var messenger = messenger || {
	subscribers : [],

	publish: function(message) {
		$.each(this.subscribers, function(index, subscriber) {
			if(  subscriber && subscriber.callback && message instanceof subscriber.messageType)
				subscriber.callback(message);
		});
	},
	
	subscribeTo: function(messageType, callback) {
		var subscriber = new Subscriber(messageType, callback);
		this.subscribers.push(subscriber);
	}
}