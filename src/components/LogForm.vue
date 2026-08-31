<template>
    <div class="container">
        <form action="action_page.php">

            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name..">

            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name..">

            <label for="country">Mail Provider</label>
            <select id="country" name="country" v-model="rangeVal">
              <option value="gmail" >Gmail</option>
              <option value="hotmail" >Hotmail</option>
              <option value="yahoo" >Yahoo</option>
            </select>

            <button type="submit" >
                <a v-bind:href="url" target="_blank" style="color: black; text-decoration: none;">Upload</a>
            </button>

        </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      send: false,
      value: null,
      body: null,
      message: null,
      url: `https://mail.google.com/mail/?view=cm&fs=1&to=arnau2112@gmail.com&su=Mailtrap%20is%20awesome`,
      rangeVal: "gmail"
    };
  },
  watch: {
    rangeVal(newVal) {
      switch(newVal) {
        case "gmail":
          this.GmailFilter();
          break;
        case "hotmail":
          this.HotmailFilter();
          break;
        case "yahoo":
          this.YahooFilter();
          break;
      }
    }
  },
  methods: {
    GmailFilter() {
        this.url = `https://mail.google.com/mail/?view=cm&fs=1&to=arnau2112@gmail.com&su=Mailtrap%20is%20awesome`;
    },
    HotmailFilter() {
        this.url = `https://outlook.live.com/mail/0/deeplink/compose?to=arnau2112@gmail.com&subject=Mailtrap%20is%20awesome`;
    },
    YahooFilter() {
        this.url = `https://compose.mail.yahoo.com/?to=arnau2112@gmail.com&subject=Mailtrap%20is%20awesome` ;
    },
  }
};
</script>



<style>

/* Style inputs with type="text", select elements and textareas */
input[type=text], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
input[type=submit] {
  background-color: #cd8d0e;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background-color: #cd9d0c;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: rgb(230, 216, 186);
  padding: 20px;
}
</style>