## 🔀 Merge
Merging combines changes from one branch into another.  
- **Fast-forward merge**: Happens when no new commits exist on the target branch.  
- **Three-way merge**: Used when both branches have new commits.  

### Example
```bash
# Switch to main branch
git checkout main

# Merge feature branch into main
git merge feature-branch

Result: The changes from feature-branch are now part of main.
```

↩️ Revert
Revert undoes a specific commit without deleting history. It creates a new commit that reverses the changes.

# Revert a commit by its hash ID
git revert abc1234
Result: A new commit is created that cancels out the changes from commit abc1234.
