# thewechatproject.github.io

Site adapted from [TeXt Theme](https://github.com/kitian616/jekyll-TeXt-theme) which is [MIT licensed](https://github.com/kitian616/jekyll-TeXt-theme/blob/master/LICENSE).

## How To Post
### Writing the Post
You can use anything (e.g Google Docs, Notepad) to write your article. The key is to eventually turn the article into a markdown document (file ends with .md). Using a Markdown editor like (Typora)[https://typora.io/] or (IAWriter)[https://ia.net/writer] throughout the writing process may save some time but could make collaboration difficult.

#### Converting Google Docs to Markdown
Use this [add-on](https://gsuite.google.com/marketplace/app/docs_to_markdown/700168918607) to convert your document.
Go to `Add-ons->Docs to Markdown->Convert` to open the sidebar. Check `Suppress top comment` and click `Markdown` on the top left.
Copy and paste the output into (Typora)[https://typora.io/] and check that the formatting pretty much sense.

Here is one (markdown cheatsheet)[https://www.markdownguide.org/cheat-sheet/] and here is another (markdown cheatsheet)[https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet] that can help catch small formatting errors. If there are major issues make a note in the Slack.

### Publishing the Post
#### Github Account
Publishing posts will require signing up for a (Github)[https://github.com/join] account. Unless you are already familiar with git/Github, the easiest path is download (Github Desktop)[https://desktop.github.com/].

After setting up Github and Github Desktop, find the green `Code` button and click `Open with Github Desktop`. The site should now be downloaded onto your computer. Make sure to periodically `pull` or `Fetch origin` to ensure your version of the website is up to date.

#### The `_Posts` Folder
Go to the `_posts` folder. This is the only folder that needs to be modified to create posts. Move your essay document into this folder and make sure it has the `.markdown` extension. Follow the naming convention shown in other files `YYYY-MM-DD-your-post-title.markdown`.

#### Adding 'Front Matter' to define information
In (Typora)[https://typora.io/] (or some other markdown editor), make sure to add this type of information to the top of your document. 

```
---
layout: article
title:  Test Post
date:   2020-07-19 11:00:00
categories: Category
tags: [insert, tags, separated, by, commas, multiple words are allowed]
key: this-is-a-unique-key-en
author: Matthew Shu
excerpt: You can leave this blank
---
```

Here's some explanation for a few of these variables.
- `layout` - This should nearly always be `article`
- `key` - a unique identifier for the post. Always add `en` or `zh` as a suffix depending on the language of your post.
- `date` - By default, times are in Eastern time. Include a timezone offset (e.g ` −0500`) at the end if you wish to modify.
- `lang` - If your post is in Chinese, add `lang: zh`.
It is possible to add additional variables here, including `modify_date`. [Here's a list](https://tianqi.name/jekyll-TeXt-theme/docs/en/layouts) with some otherpossible variables to define.

##### Table of Contents
If your piece includes headings and subheadings (in markdown these become hashtags #), it might benefit from including a table of contents. You can enable a table of contents by adding this to the front matter.
```
aside:
  toc: false
```

##### A Note for Category/Tag Names
Category/Tag names should be generally agreed upon by the group so we don't have multiple of the same type. It's fine if a category and a tag that are very similar, but let's avoid multiple tags that mean the same thing.

#### Publishing to the Internet
`Commit` changes using GitHub Desktop.
People who have been pre-approved will be able to `push` these changes immediately. Everyone else should create a `pull request` by following the instructions [outlined here](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request#creating-a-new-pull-request). 

##### Reviewing posts before publishing
`Pull Requests` can also be helpful when someone would like someone to review the post before approving it for publishing.