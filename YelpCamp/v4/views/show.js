<% include partials/header %>

<h1><%=campground.name%></h1>

<img src="<%= campground.image %>">

<p><%= campground.description %></p>

<% campground.comments.forEach(function(comment){%>
    <p><strong><%= comment.author %></strong> - <%= comment.text %></p>
<% }) %>    

<% include partials/footer %>