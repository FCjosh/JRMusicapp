var app = {
    initialize: function() {
    this.bindEvents();
  },
 
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },

    onDeviceReady: function() {
        const ytdl = require('ytdl-core');
        const queue = new Map();

        $("#submitBtn").click(function(){
            const searchText = $("#searchSongs").val();
            $("#searchSongs").val('');
            searchSongs(searchText);
        });
        function searchSongs(searchText){
            const songInfo = ytdl.getInfo(searchText);
            const song = {
                title: songInfo.title,
                url: songInfo.video_url,
            };
            const queueConstruct = {
                songs: [],
                volume: 5,
                playing: true,
            };
            queue.set(queueConstruct);
            queueConstruct.songs.push(song);
            $("#content").html(queue);
        }

        $('#content').html("test worked for real");
    }
};
app.initialize();