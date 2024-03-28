# Buttons

Buttons are buttons.
They have an `onClick` handler.
Eventually somebody wants to navigate to a different route with a Button.
I've seen everything - `navigate` in the `onClick`, `<button>` wrapped in `<a>`.
Can you forbid that?
The primary CTA has to sometimes navigate to another page.

Solution was making it a polymorphic component.
`<Button as="a" href="...">`
Tried with magic href prop, but that was a Typescript nightmare.
It's possible, but as I got older I started to appreciate explicit APIs more.
It's an extra 6 characters, but makes everything crystal clear.

Interestingly we went through the same dilemma with Link component.
Which is like a text link - a styled `<a>` tag.
But sometimes it's a button.
You have a truncated paragraph and want to un-truncate it with a Link.
That won't navigate anywhere.

We had to see both of these use cases to articulate the need for a complex solution.
It's not a one-off thing, it's a new concept.
Components need to be updated, developers need to be educated, code needs to be codemodded.
