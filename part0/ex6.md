sequenceDiagram
    participant browser
    participant server

    Note right of browser: Register an event handler to form's submit
    Note right of browser: Prevent GET request
    Note right of browser: create new note, add to notes list
    Note right of browser: rerender note list on page
    Note right of browser: Send new note to server
    browser ->> server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note right of browser: POST request contain new_node data content and date in JSON format
    activate server 
    server -->> browser: HTTP status code 201 Created
    deactivate server 
   

