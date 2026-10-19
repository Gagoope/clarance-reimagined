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

- Keep portfolio facts in the shared portfolio data module and shorten the homepage through progressive disclosure, so presentation changes do not alter project information.
- Use the shared UI-kit Button for new button controls, so interaction styling stays consistent.
- Resolve project actions through the shared portfolio data helper: use verified CV demo URLs, a local portfolio anchor, or a project-specific enquiry fallback, so missing URLs are never fabricated.

- Keep decorative portfolio motion in PortfolioMotion and semantic CSS tokens; use Framer Motion only for scroll-linked transforms to keep animation lightweight and reduced-motion aware.
- Use the shared dialog-focus hook for overlay keyboard containment and focus restoration so keyboard users retain access to page actions.
