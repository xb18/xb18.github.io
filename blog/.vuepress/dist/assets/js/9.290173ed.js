(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{384:function(t,s,a){t.exports=a.p+"assets/img/git.90e14b75.jpg"},413:function(t,s,a){"use strict";a.r(s);var e=a(9),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("img",{attrs:{src:a(384),alt:"img"}})]),t._v(" "),e("h1",{attrs:{id:"add"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[t._v("#")]),t._v(" add")]),t._v(" "),e("h2",{attrs:{id:"添加到暂存区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加到暂存区"}},[t._v("#")]),t._v(" 添加到暂存区")]),t._v(" "),e("blockquote",[e("p",[t._v("这是个多功能命令：可以用它开始跟踪新文件，或者把已跟踪的文件放到暂存区，还能用于合并时把有冲突的文件标记为已解决状态等。将这个命令理解为“精确地将内容添加到下一次提交中”而不是“将一个文件添加到项目中”要更加合适。")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" a.js\n")])])]),e("h1",{attrs:{id:"commit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commit"}},[t._v("#")]),t._v(" commit")]),t._v(" "),e("h2",{attrs:{id:"提交更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提交更新"}},[t._v("#")]),t._v(" 提交更新")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"msg"')]),t._v("\n")])])]),e("h2",{attrs:{id:"跳过add"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#跳过add"}},[t._v("#")]),t._v(" 跳过add")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -a -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'msg'")]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("Git 提供了一个跳过使用暂存区域的方式， 只要在提交的时候，给 "),e("code",[t._v("git commit")]),t._v(" 加上 "),e("code",[t._v("-a")]),t._v(" 选项，Git 就会自动把所有已经跟踪过的文件暂存起来一并提交，从而跳过 "),e("code",[t._v("git add")]),t._v(" 步骤")])]),t._v(" "),e("h1",{attrs:{id:"branch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#branch"}},[t._v("#")]),t._v(" branch")]),t._v(" "),e("h2",{attrs:{id:"分支创建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支创建"}},[t._v("#")]),t._v(" 分支创建")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#创建了test分支")]),t._v("\n")])])]),e("h2",{attrs:{id:"分支切换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支切换"}},[t._v("#")]),t._v(" 分支切换")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这会给你一个用于工作的本地分支，并且起点位于 origin/serverfix")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b serverfix origin/serverfix\n")])])]),e("h2",{attrs:{id:"创建并切换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建并切换"}},[t._v("#")]),t._v(" 创建并切换")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n")])])]),e("h2",{attrs:{id:"分支合并"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支合并"}},[t._v("#")]),t._v(" 分支合并")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将test分支合并到master分支")]),t._v("\n")])])]),e("h2",{attrs:{id:"分支删除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支删除"}},[t._v("#")]),t._v(" 分支删除")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branchname"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#删除本地分支")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d -r "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branchname"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#删除远程分支，删除后还需推送到服务器")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin:"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branchname"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#删除后推送至服务器")]),t._v("\n")])])]),e("h2",{attrs:{id:"分支查看"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支查看"}},[t._v("#")]),t._v(" 分支查看")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看本地所有分支 ")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -r "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看远程所有分支")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -a "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看本地和远程的所有分支")]),t._v("\n")])])]),e("h1",{attrs:{id:"fetch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fetch"}},[t._v("#")]),t._v(" fetch")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程主机名"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这个命令将某个远程主机的更新全部取回本地")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#git fetch origin")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程主机名"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("分支名"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#注意之间有空格")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git fetch origin master")]),t._v("\n")])])]),e("h1",{attrs:{id:"pull"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pull"}},[t._v("#")]),t._v(" pull")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#等同于")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch origin master "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#从远程主机的master分支拉取最新内容 ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge FETCH_HEAD    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将拉取下来的最新内容合并到当前所在的分支中")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将远程主机的某个分支的更新取回，并与本地指定的分支合并，完整格式可表示为：")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程主机名"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程分支名"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("本地分支名"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#如果远程分支是与当前分支合并，则冒号后面的部分可以省略")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin master\n")])])]),e("h1",{attrs:{id:"push"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#push"}},[t._v("#")]),t._v(" push")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#git push <remote> <branch>")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin serverfix \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#推送本地的 serverfix 分支来更新远程仓库上的 serverfix 分支")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin serverfix:serverfix\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#推送本地的 serverfix 分支，将其作为远程仓库的 serverfix 分支")]),t._v("\n")])])]),e("h1",{attrs:{id:"remote"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remote"}},[t._v("#")]),t._v(" remote")]),t._v(" "),e("h2",{attrs:{id:"添加远程仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加远程仓库"}},[t._v("#")]),t._v(" 添加远程仓库")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#origin")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" pb https://github.com/paulboone/ticgit\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#origin\thttps://github.com/schacon/ticgit (fetch)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#origin\thttps://github.com/schacon/ticgit (push)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#pb\thttps://github.com/paulboone/ticgit (fetch)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#pb\thttps://github.com/paulboone/ticgit (push)")]),t._v("\n")])])]),e("h1",{attrs:{id:"status"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[t._v("#")]),t._v(" status")]),t._v(" "),e("h2",{attrs:{id:"紧凑输出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#紧凑输出"}},[t._v("#")]),t._v(" 紧凑输出")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("git status")]),t._v(" 命令的输出十分详细，但其用语有些繁琐。 Git 有一个选项可以帮你缩短状态命令的输出，这样可以以简洁的方式查看更改。 如果你使用 "),e("code",[t._v("git status -s")]),t._v(" 命令或 "),e("code",[t._v("git status --short")]),t._v(" 命令，你将得到一种格式更为紧凑的输出。")])]),t._v(" "),e("div",{staticClass:"language-console extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ git status -s\n M README\nMM Rakefile\nA  lib/git.rb\nM  lib/simplegit.rb\n?? LICENSE.txt\n")])])]),e("p",[t._v("新添加的未跟踪文件前面有 "),e("code",[t._v("??")]),t._v(" 标记，新添加到暂存区中的文件前面有 "),e("code",[t._v("A")]),t._v(" 标记，修改过的文件前面有 "),e("code",[t._v("M")]),t._v(" 标记。 输出中有两栏，左栏指明了暂存区的状态，右栏指明了工作区的状态。例如，上面的状态报告显示： "),e("code",[t._v("README")]),t._v(" 文件在工作区已修改但尚未暂存，而 "),e("code",[t._v("lib/simplegit.rb")]),t._v(" 文件已修改且已暂存。 "),e("code",[t._v("Rakefile")]),t._v(" 文件已修，暂存后又作了修改，因此该文件的修改中既有已暂存的部分，又有未暂存的部分。")]),t._v(" "),e("h1",{attrs:{id:"gitignore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gitignore"}},[t._v("#")]),t._v(" .gitignore")]),t._v(" "),e("h2",{attrs:{id:"常用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用"}},[t._v("#")]),t._v(" 常用")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".DS_Store\nnode_modules\n/dist\n\n# local env files\n.env.local\n.env.*.local\n\n# Log files\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\npnpm-debug.log*\n\n# Editor directories and files\n.idea\n.vscode\n*.suo\n*.ntvs*\n*.njsproj\n*.sln\n*.sw?\n\n")])])]),e("blockquote",[e("p",[t._v("GitHub 有一个十分详细的针对数十种项目及语言的 "),e("code",[t._v(".gitignore")]),t._v(" 文件列表， 你可以在 https://github.com/github/gitignore 找到它。")])]),t._v(" "),e("h2",{attrs:{id:"详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#详解"}},[t._v("#")]),t._v(" 详解")]),t._v(" "),e("p",[t._v("一般我们总会有些文件无需纳入 Git 的管理，也不希望它们总出现在未跟踪文件列表。 通常都是些自动生成的文件，比如日志文件，或者编译过程中创建的临时文件等。 在这种情况下，我们可以创建一个名为 "),e("code",[t._v(".gitignore")]),t._v(" 的文件，列出要忽略的文件的模式。 来看一个实际的 "),e("code",[t._v(".gitignore")]),t._v(" 例子：")]),t._v(" "),e("div",{staticClass:"language-console extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ cat .gitignore\n*.[oa]\n*~\n")])])]),e("p",[t._v("第一行告诉 Git 忽略所有以 "),e("code",[t._v(".o")]),t._v(" 或 "),e("code",[t._v(".a")]),t._v(" 结尾的文件。一般这类对象文件和存档文件都是编译过程中出现的。 第二行告诉 Git 忽略所有名字以波浪符（~）结尾的文件，许多文本编辑软件（比如 Emacs）都用这样的文件名保存副本。 此外，你可能还需要忽略 log，tmp 或者 pid 目录，以及自动生成的文档等等。 要养成一开始就为你的新仓库设置好 .gitignore 文件的习惯，以免将来误提交这类无用的文件。")]),t._v(" "),e("p",[t._v("文件 "),e("code",[t._v(".gitignore")]),t._v(" 的格式规范如下：")]),t._v(" "),e("ul",[e("li",[t._v("所有空行或者以 "),e("code",[t._v("#")]),t._v(" 开头的行都会被 Git 忽略。")]),t._v(" "),e("li",[t._v("可以使用标准的 glob 模式匹配，它会递归地应用在整个工作区中。")]),t._v(" "),e("li",[t._v("匹配模式可以以（"),e("code",[t._v("/")]),t._v("）开头防止递归。")]),t._v(" "),e("li",[t._v("匹配模式可以以（"),e("code",[t._v("/")]),t._v("）结尾指定目录。")]),t._v(" "),e("li",[t._v("要忽略指定模式以外的文件或目录，可以在模式前加上叹号（"),e("code",[t._v("!")]),t._v("）取反。")])]),t._v(" "),e("p",[t._v("所谓的 glob 模式是指 shell 所使用的简化了的正则表达式。 星号（"),e("code",[t._v("*")]),t._v("）匹配零个或多个任意字符；"),e("code",[t._v("[abc]")]),t._v(" 匹配任何一个列在方括号中的字符 （这个例子要么匹配一个 a，要么匹配一个 b，要么匹配一个 c）； 问号（"),e("code",[t._v("?")]),t._v("）只匹配一个任意字符；如果在方括号中使用短划线分隔两个字符， 表示所有在这两个字符范围内的都可以匹配（比如 "),e("code",[t._v("[0-9]")]),t._v(" 表示匹配所有 0 到 9 的数字）。 使用两个星号（"),e("code",[t._v("**")]),t._v("）表示匹配任意中间目录，比如 "),e("code",[t._v("a/**/z")]),t._v(" 可以匹配 "),e("code",[t._v("a/z")]),t._v(" 、 "),e("code",[t._v("a/b/z")]),t._v(" 或 "),e("code",[t._v("a/b/c/z")]),t._v(" 等。")]),t._v(" "),e("p",[t._v("我们再看一个 "),e("code",[t._v(".gitignore")]),t._v(" 文件的例子：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 忽略所有的 .a 文件\n*.a\n\n# 但跟踪所有的 lib.a，即便你在前面忽略了 .a 文件\n!lib.a\n\n# 只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO\n/TODO\n\n# 忽略任何目录下名为 build 的文件夹\nbuild/\n\n# 忽略 doc/notes.txt，但不忽略 doc/server/arch.txt\ndoc/*.txt\n\n# 忽略 doc/ 目录及其所有子目录下的 .pdf 文件\ndoc/**/*.pdf\n")])])]),e("blockquote",[e("p",[t._v("git使用文档：https://git-scm.com/book/zh/v2/")])])])}),[],!1,null,null,null);s.default=n.exports}}]);