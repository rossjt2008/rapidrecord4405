function websites() {
    self.location = "websites.html"
}
function clickBack() {
    lastpage = localStorage.getItem("lastpage")
    self.location = lastpage
}