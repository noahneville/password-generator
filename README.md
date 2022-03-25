# Password Generator

For this project, I used JavaScript to build a simple password generator that, given a set of user-specified parameters, outputs a string of randomly selected characters. 

To achieve this, I used the prompt and confirm methods to gather a series of criteria from the user about the length of password they want, as well as which types of characters to include. 

I then created an array using the concatenation method from arrays of each character type. Then I created a 'for loop' on that array for the desired password length that used the Math.floor and Math.random methods to come up with a string of random characters, which was the final output of the function. 

I found this project to be pretty straight forward once I sat down and broke down the problem into pseudocode. At first, I thought to write 'if/else' statements for each possible combination of criteria, but then realized I could be much more efficient by using boolean variables defined by my Confirm methods to concatenate my array without the need for a massive list of if/else statements. By sitting down to pseudocode and figure out exactly how I wanted to attack the problem before writing any code, I saved myself a ton of time and the only things I really had to fix were typos and several instances where I used the wrong variables. In fact, the biggest take away from this project name for me is to not have so many variables with nearly identical names, to help avoid confusion.

The project can be found deployed live [here](https://noahneville.github.io/password-generator/)
The repository can be found [here](https://github.com/noahneville/password-generator)

## Acknowledgements 

Thanks to the members of my bootcamp study group, who help by letting me bounce ideas off them and also help me get better at debugging as I help them find that one } they forgot on line 132. 
    
    - Seamona Stewart, who hosts our Zoom calls. Truly our Atlus, holding the whole study group on her back.
    - Brian Samuels
    - James Edwards
    - Eric Hurst
    - James Edwards
    - Jason Couch
    - Anthony Chang

Also thanks to GitHub user kwiniarski97, who posted [this comment](https://gist.github.com/bendc/1e6af8f2d8027f2965da?permalink_comment_id=2846400#gistcomment-2846400) with arrays of the entire alphabet, in both upper and lower case so I didn't have to type them by hand. 

I got my special characters list from [OWASP](https://owasp.org/www-community/password-special-characters), but had to type out all the quotation marks and commas by hand. 

