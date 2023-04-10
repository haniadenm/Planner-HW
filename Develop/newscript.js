// Function to display the current date at the top of the calendar
function displayDate() {
    var currentDate = dayjs().format("dddd, MMMM D");
    $("#currentDay").text(currentDate);
  }
  
  // Function to color-code the time blocks based on current time
  function colorCodeTimeBlocks() {
    var currentHour = dayjs().hour();
  
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
      if (blockHour < currentHour) {
        $(this).addClass("past").removeClass("present future");
      } else if (blockHour === currentHour) {
        $(this).addClass("present").removeClass("past future");
      } else {
        $(this).addClass("future").removeClass("past present");
      }
    });
  }
  
  // Function to load saved events from local storage
  function loadSavedEvents() {
    $(".description").each(function () {
      var blockHour = $(this).parent().attr("id");
      $(this).val(localStorage.getItem(blockHour));
    });
  }
  
  // Function to save event to local storage
  function saveEvent() {
    var blockHour = $(this).parent().attr("id");
    var eventText = $(this).siblings(".description").val();
  
    localStorage.setItem(blockHour, eventText);
  }
  
  $(document).ready(function () {
    // Display current date at the top of the calendar
    displayDate();
  
    // Color-code time blocks based on current time
    colorCodeTimeBlocks();
  
    // Load saved events from local storage
    loadSavedEvents();
  
    // Save event to local storage when save button is clicked
    $(".saveBtn").on("click", saveEvent);
  
    // Update time blocks color coding every hour
    setInterval(colorCodeTimeBlocks, 3600000);
});
