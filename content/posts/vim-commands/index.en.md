---
title: Top Vim Commands
description: Most Popular Vim Commands
toc: true
tags: ["vim", "cheatsheet"]
series: ['CheatSheet']
categories: [Vim, CheatSheet]
date: 2022-09-13
featuredImage: https://picsum.photos/701/233
authors: [roman-kurnovskii]
---

## most popular
    
    gg              ##  go to first line
    ge              ##  jump backward to end of words
    :n              ##  go To line n

## cursor movements


    h               ##  move left
    j               ##  move down
    k               ##  move up
    l               ##  move right

    b / w           ##  Previous/next word (punctuaction)
    B / W           ##  Previous/next word (spaces separate words)
    ge / e          ##  Previous/next end of word

    E               ##  jump to end of words (no punctuation)
    0               ##  (zero) start of line
    ^               ##  first non-blank character of line
    $               ##  end of line
    -               ##  move line upwards, on the first non blank character
    +               ##  move line downwards, on the first non blank character
    <enter>         ##  move line downwards, on the first non blank character
    gg              ##  go to first line
    G               ##  go to last line
    ngg             ##  go to line n
    nG              ##  go To line n
    :n              ##  go To line n
    )               ##  move the cursor forward to the next sentence.
    (               ##  move the cursor backward by a sentence.
    {               ##  move the cursor a paragraph backwards
    }               ##  move the cursor a paragraph forwards
    ]]              ##  move the cursor a section forwards or to the next {
    [[              ##  move the cursor a section backwards or the previous {
    CTRL-f          ##  move the cursor forward by a screen of text
    CTRL-b          ##  move the cursor backward by a screen of text
    CTRL-u          ##  move the cursor up by half a screen
    CTRL-d          ##  move the cursor down by half a screen
    H               ##  move the cursor to the top of the screen.
    M               ##  move the cursor to the middle of the screen.
    L               ##  move the cursor to the bottom of the screen.
    fx              ##  search line forward for 'x'
    Fx              ##  search line backward for 'x'
    tx              ##  search line forward before 'x'
    Tx              ##  search line backward before 'x'


## insert mode

    i          ##  start insert mode at cursor
    I          ##  insert at the beginning of the line
    a          ##  append after the cursor
    A          ##  append at the end of the line
    o          ##  open (append) blank line below current line
    O          ##  open blank line above current line
    Esc        ##  exit insert mode


## edit mode

    r             ##  replace a single character (does not use insert mode)
    R             ##  enter Insert mode, replacing characters rather than inserting
    J             ##  join line below to the current one
    cc            ##  change (replace) an entire line
    cw            ##  change (replace) to the end of word
    C             ##  change (replace) to the end of line
    ct'           ##  change (replace) until the ' character (can change ' for any character)
    s             ##  delete character at cursor and substitute text
    S             ##  delete line at cursor and substitute text (same as cc)
    xp            ##  transpose two letters (delete and paste, technically)
    u             ##  undo
    CTRL-r        ##  redo
    .             ##  repeat last command
    ~             ##  switch case
    g~iw          ##  switch case of current word
    gUiw          ##  make current word uppercase
    guiw          ##  make current word lowercase
    gU$           ##  make uppercase until end of line
    gu$           ##  make lowercase until end of line
    >>            ##  indent line one column to right
    <<            ##  indent line one column to left
    ==            ##  auto-indent current line
    ddp           ##  swap current line with next
    ddkp          ##  swap current line with previous
    :%retab       ##  fix spaces / tabs issues in whole file
    :r [name]     ##  insert the file [name] below the cursor.
    :r !{cmd}     ##  execute {cmd} and insert its standard output below the cursor.


## delete text

    x               ##  delete current character
    X               ##  delete previous character
    dw              ##  delete the current word
    dd              ##  delete (cut) a line
    dt'             ##  delete until the next ' character on the line (replace ' by any character)
    D               ##  delete from cursor to end of line
    :[range]d       ##  delete [range] lines


# copy/move text

    yw                ##  yank word
    yy                ##  yank (copy) a line
    2yy               ##  yank 2 lines
    y$                ##  yank to end of line
    p                 ##  put (paste) the clipboard after cursor/current line
    P                 ##  put (paste) before cursor/current line
    :set paste        ##  avoid unexpected effects in pasting
    :registers        ##  display the contents of all registers
    "xyw              ##  yank word into register x
    "xyy              ##  yank line into register x
    :[range]y x       ##  yank [range] lines into register x
    "xp               ##  put the text from register x after the cursor
    "xP               ##  put the text from register x before the cursor
    "xgp              ##  just like "p", but leave the cursor just after the new text
    "xgP              ##  just like "P", but leave the cursor just after the new text
    :[line]put x      ##  put the text from register x after [line]

## search/replace

    /pattern                  ##  search for pattern
    ?pattern                  ##  search backward for pattern
    n                         ##  repeat search in same direction
    N                         ##  repeat search in opposite direction
    *                         ##  search forward, word under cursor
    #                         ##  search backward, word under cursor
    set ic                    ##  ignore case: turn on
    set noic                  ##  ignore case: turn off
    :%s/old/new/g             ##  replace all old with new throughout file
    :%s/old/new/gc            ##  replace all old with new throughout file with confirmation
    :argdo %s/old/new/gc | wq ##  open multiple files and run this command to replace old 
                                with new in every file with confirmation, save and quit

## visual mode

    v               ##  start visual mode, mark lines, then do command (such as y-yank)
    V               ##  enter visual line mode
    o               ##  move to other end of marked area
    U               ##  upper case of marked area
    CTRL-v          ##  start visual block mode
    O               ##  move to other corner of block
    aw              ##  mark a word
    d / x           ##  Delete selection
    s               ##  Replace selection
    y               ##  Yank selection (Copy)
    ab              ##  a () block (with braces)
    ab              ##  a {} block (with brackets)
    ib              ##  inner () block
    ib              ##  inner {} block
    Esc             ##  exit visual mode

### commands

    >               ##  shift right
    <               ##  shift left
    c               ##  change (replace) marked text
    y               ##  yank (copy) marked text
    d               ##  delete marked text
    ~               ##  switch case


## bookmarks

    :marks        ##  list all the current marks
    ma            ##  make a bookmark named a at the current cursor position
    `a            ##  go to position of bookmark a
    'a            ##  go to the line with bookmark a
    `.            ##  go to the line that you last edited


## macros

    qa              ##  start recording macro 'a'
    q               ##  end recording macro
    @a              ##  replay macro 'a'
    @:              ##  replay last command


## spelling

    ]s           ##  next misspelled word
    [s           ##  previous misspelled word
    zg           ##  add word to wordlist
    zug          ##  undo last add word
    z=           ##  suggest word


## exit

    :q              ##  quit Vim. This fails when changes have been made.
    :q!             ##  quit without writing.
    :cq             ##  quit always, without writing.
    :w              ##  save without exiting.
    :wq             ##  write the current file and exit.
    :wq!            ##  write the current file and exit always.
    :wq {file}      ##  write to {file}. Exit if not editing the last
    :wq! {file}     ##  write to {file} and exit always.
    :[range]wq[!]   ##  same as above, but only write the lines in [range].
    ZZ              ##  write current file, if modified, and exit.
    ZQ              ##  quit current file and exit (same as ":q!").


## multiple files

    :e filename         edit a file in a new buffer
    :tabe filename      edit a file in a new tab (Vim7, gVim)
    :ls                 list all buffers
    :bn                 go to next buffer
    :bp                 go to previous buffer
    :bd                 delete a buffer (close a file)
    :b1                 show buffer 1
    :b vimrc            show buffer whose filename begins with "vimrc"
    :bufdo <command>    run 'command(s)' in all buffers
    :[range]bufdo <command> run 'command(s)' for buffers in 'range'


## windows

    :sp f               split open f
    :vsp f              vsplit open f
    CTRL-w s            split windows
    CTRL-w w            switch between windows
    CTRL-w q            quit a window
    CTRL-w v            split windows vertically
    CTRL-w x            swap windows
    CTRL-w h            left window
    CTRL-w j            down window
    CTRL-w k            up window
    CTRL-w l            right window
    CTRL-w +            increase window height
    CTRL-w -            decrease window height
    CTRL-w <            increase window width
    CTRL-w >            decrease window width
    CTRL-w =            equal window
    CTRL-w o            close other windows
    zz                  Centers the window to the current line


## programming

    %                   show matching brace, bracket, or parenthese
    gf                  edit the file whose name is under or after the cursor
    gd                  when the cursor is on a local variable or function, jump to its declaration
    ''                  return to the line where the cursor was before the latest jump
    gi                  return to insert mode where you inserted text the last time
    CTRL-o              move to previous position you were at
    CTRL-i              move to more recent position you were at


##  Resources

- [vim faq](https://vimhelp.org/vim_faq.txt.html)
- [vim cheat sheet](https://github.com/LeCoupa/awesome-cheatsheets/blob/master/tools/vim.txt)
- [vim cheat sheet](https://devhints.io/vim)
