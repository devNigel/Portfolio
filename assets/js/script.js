// Get that hamburger menu cookin' //

document.addEventListener("DOMContentLoaded", function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }


  feedURL='https://blog.nigeljoy.me/feeds/posts/summary?published&alt=json-in-script&callback=blogPostsFeed&max-results=4';
  loadBlogFeed(feedURL);
});

// Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}


function loadBlogFeed(file) {
  // DOM: Create the script element
  var jsElm = document.createElement("script");
  // set the type attribute
  jsElm.type = "text/javascript";
  // make the script element load file
  jsElm.src = file;
  // finally insert the element to the body element in order to load the script
  document.body.appendChild(jsElm);
}

function blogPostsFeed(ps)
 {

posts=ps.feed.entry?ps.feed.entry:null;

if(posts){
    var podiv = document.getElementsByClassName( 'posts-outer' )[0];
    var bpdiv = document.createElement( 'div' );
    bpdiv.setAttribute("id", "blog-posts");
    bpdiv.setAttribute("class", "blog-posts");
    // podiv.parentNode.insertBefore( bpdiv, podiv.nextSibling );
    podiv.appendChild(bpdiv);

    
    posts.forEach(function(post){
     var bpdivpost = document.createElement( 'article' );
     bpdivpost.setAttribute("id", "blog-post");
     bpdivpost.className = "blog-post";
    
     var bpdivpostCard= document.createElement( 'div' );
     bpdivpostCard.className = "card";

     var bpdivpostCardContent= document.createElement( 'div' );
     bpdivpostCardContent.className = "card-content";

     var bpdivpostTitle= document.createElement( 'h4' );
     bpdivpostTitle.className = "blog-post-title title";
    
     bpdivpostTitleLink=document.createElement( 'a' );
     bpdivpostTitleLink.setAttribute("href",post.link[4].href);
     bpdivpostTitleLink.setAttribute("target","_blank");
     bpdivpostTitleLink.innerHTML=post.title.$t;
    
     bpdivpostTitle.appendChild(bpdivpostTitleLink);
     
     bpdivpostCardContent.appendChild(bpdivpostTitle);
     bpdivpostCard.appendChild(bpdivpostCardContent);
     bpdivpost.appendChild(bpdivpostCard);
    
     bpdiv.appendChild(bpdivpost);
    }); 
    
}

}