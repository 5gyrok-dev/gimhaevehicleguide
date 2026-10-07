<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep guide copy and pink-highlighted field translations centralized in `src/guide-content.ts` so each language and document remains consistent.
- Use the supplied PDF assets unchanged as originals and their rendered first-page previews only for touch zoom; never recreate or modify the official forms.
- Keep navigation choices in client component state; the guide does not collect or persist personal information.
- Give each visitor-specific transfer form its own document key and asset mapping so adding a branch cannot replace another visitor's official form.
