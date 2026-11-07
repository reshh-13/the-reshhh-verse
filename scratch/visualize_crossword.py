import sys

down_words = {
    '1': 'HACKATHONS',
    '2': 'ACHIEVEMENTS',
    '3': 'LEADERSHIP'
}

across_words = {
    '4': 'INTERNSHIP',
    '5': 'EVENTS',
    '6': 'CLUBS'
}

from crossword_solver import valid_solutions

for idx in range(min(5, len(valid_solutions))):
    area, w, h, placements = valid_solutions[idx]
    
    # Normalize
    min_r = min(min(r for r,c in placements.values()), min(r for r,c in placements.values()))
    min_c = min(min(c for r,c in placements.values()), min(c for r,c in placements.values()))
    norm = {}
    for k in placements:
        norm[k] = (placements[k][0] - min_r, placements[k][1] - min_c)
        
    grid_w = max(
        norm['1'][1] + 1,
        norm['2'][1] + 1,
        norm['3'][1] + 1,
        norm['4'][1] + len(across_words['4']),
        norm['5'][1] + len(across_words['5']),
        norm['6'][1] + len(across_words['6'])
    )
    grid_h = max(
        norm['1'][0] + len(down_words['1']),
        norm['2'][0] + len(down_words['2']),
        norm['3'][0] + len(down_words['3']),
        norm['4'][0] + 1,
        norm['5'][0] + 1,
        norm['6'][0] + 1
    )
    
    board = [['.' for _ in range(grid_w)] for _ in range(grid_h)]
    num_grid = [[' ' for _ in range(grid_w)] for _ in range(grid_h)]
    
    # Place across
    for k in ['4', '5', '6']:
        r, c = norm[k]
        num_grid[r][c] = k
        for j, ch in enumerate(across_words[k]):
            board[r][c + j] = ch
            
    # Place down
    for k in ['1', '2', '3']:
        r, c = norm[k]
        if num_grid[r][c] == ' ':
            num_grid[r][c] = k
        else:
            num_grid[r][c] = f"{num_grid[r][c]}/{k}"
        for i, ch in enumerate(down_words[k]):
            board[r + i][c] = ch
            
    print(f"=== SOLUTION #{idx + 1} (Size: {grid_w}x{grid_h}, Placements: {norm}) ===")
    for r in range(grid_h):
        line = ""
        for c in range(grid_w):
            line += board[r][c] + " "
        print(f"R{r:2d}: {line}")
    print("\nStarting Cells:")
    for k in sorted(norm.keys()):
        orientation = 'DOWN' if k in ['1', '2', '3'] else 'ACROSS'
        name = down_words[k] if orientation == 'DOWN' else across_words[k]
        print(f"  {k}. {name} ({orientation}) starts at row {norm[k][0]}, col {norm[k][1]}")
    print("\n" + "="*50 + "\n")

