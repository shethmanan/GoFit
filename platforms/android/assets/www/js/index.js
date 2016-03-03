/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
  // Application Constructor
  initialize: function() {
    this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady: function() {
    app.receivedEvent('deviceready');
  },

  // Update DOM on a Received Event
  receivedEvent: function(id) {

    var success = function(data) {
      console.log(data);
      if (data) {
        $(".test").html(data + " Step counter feature is supported");
      } else {
        $(".test").html(data + " Step counter feature is not supported");
      }
    }
    var failure = function(data) {
      console.log(data);
      $(".fail").html(data + " feature not supported");
    }
    pedometer.isStepCountingAvailable(success, failure);
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);

    function setNotification(id1, title1, freq) {
      var now = new Date().getTime(),
        first_time = new Date(now + 5 * 1000 * 60);
      cordova.plugins.notification.local.schedule({
        id: id1,
        title: title1,
        at: first_time,
        every: freq
      });
      return true;
    }

    function removeNotification(id) {
      cordova.plugins.notification.local.cancel(id, function() {});
      return true;
    }
  }
};

app.initialize();
