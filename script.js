var app = angular.module('redditClone', ['ngAnimate', 'ngMessages']).controller('redditController', function($scope, $http) {
  // $scope.mv = {articles: []};
  $scope.mv = {};
  $scope.mv.submitPost = false;
  $scope.mv.readComments = false;
  $scope.mv.newComments = false;
  $scope.mv.sorted = '';
  $scope.mv.articles = [
    {
      title: 'Archer',
      author: 'Frank',
      image: 'http://cdn.crossmap.com/images/3/11/31111.jpg',
      votes: 7,
      description: 'Lorem ipsum dolor sit amet, augue duis at eget felis lobortis pharetra, odio penatibus ultrices placerat. Id nunc, arcu quis turpis nibh, nec id eget non. Amet augue, in aliquet arcu ut. Tincidunt et pede elementum porttitor mattis. Leo donec pellentesque dictum et, auctor erat nec id potenti nonummy. Lorem id, orci magna vehicula laborum diam imperdiet eum.',
      date: "2016-04-13T12:05:24.513Z",
      comments: [{ commentAuthor: 'Danny', says: 'Super funny'}, { commentAuthor: 'Sarah', says: 'A bit mean-spirited...' }, { commentAuthor: 'Melvin', says: 'I like potatoes!' }]
    },
    {
      title: 'The League',
      author: 'Joe',
      image: 'http://is3.mzstatic.com/image/thumb/Video3/v4/13/49/46/13494649-dba2-f13d-4efa-aac396d1a7c1/mzl.oncrhzmb.lsr/600x600bb-85.jpg',
      votes: 4,
      description: 'nteger donec aliquam quis consectetuer praesent egestas, neque hendrerit suscipit convallis placerat facilisi neque, nulla in proin esse sociosqu cursus in. Pretium justo fusce at ac, sit quam est dolore velit dui, per in hendrerit maecenas pellentesque velit ultrices, nulla mi metus et velit non, nonummy sapien in. Nulla augue scelerisque mollis, volutpat lacinia massa a. Pretium mi eros dictum asperiores, proin mattis venenatis sit sit pellentesque, lectus vitae feugiat molestie sed purus ut, feugiat urna neque justo, vitae vestibulum dapibus.',
      date: "2016-05-01T21:34:24.513Z",
      newAuthor: [],
      comments: []
    },
    {
      title: 'Justified',
      author: 'Kimberly',
      image: 'http://kingoftheflatscreen.com/wp-content/uploads/2015/03/12846_9c3ced715d466de095a57650ce1f0331.jpg',
      votes: 10,
      description: 'nteger donec aliquam quis consectetuer praesent egestas, neque hendrerit suscipit convallis placerat facilisi neque, nulla in proin esse sociosqu cursus in. Pretium justo fusce at ac, sit quam est dolore velit dui,  vitae feugiat molestie sed purus ut, feugiat urna neque justo, vitae vestibulum dapibus.',
      date: "2016-03-23T17:20:24.513Z",
      newAuthor: [],
      comments: []
    }
  ];
  $scope.mv.sortables = ['votes', 'date', 'title'];
  $scope.post = function (isValid) {
    if(isValid) {
      $scope.mv.article.comments = [];
      $scope.mv.article.votes = 0;
      $scope.mv.article.date = new Date();
      $scope.mv.articles.push($scope.mv.article);
      $scope.mv.article = {};
      $scope.postForm.$setPristine();
      $scope.mv.submitPost = false;
    }
  };

  $scope.tallyVotes = function (article, num) {
    article.votes += num;
  };

  $scope.addComments = function (article, commentForm) {
    article.comments.push(article.comment);
    article.comment = "";
    commentForm.$setUntouched();
  };
  $scope.orderSort = function (criteria) {
    $scope.mv.display = criteria;
    if (criteria === "votes") {
      criteria = '-votes';
    }
    $scope.mv.ordered = criteria;
  }
  $scope.mv.authComments = [$scope.mv.articles.newAuthor, $scope.mv.articles.comments];
  // console.log($scope);
  $scope.$watch('mv.articles[1].votes', function (newValue, oldValue) {
    console.log('number changed from:', oldValue, 'to:', newValue )
  })

  // $http.get('https://www.reddit.com/.json').then(function(result) {
  //   console.log(result.data.data.children);
  //   var stuff = result.data.data.children;
  //   for (var i = 0; i < stuff.length; i++) {
  //     $scope.mv.redditPosts = stuff[i].data.media.oembed.thumbnail_url;
  //   }
  // })
  // console.log($scope.mv.articles.votes[1]);
});
