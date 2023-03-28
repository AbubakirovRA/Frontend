import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class Tetris {
    public static final int WIDTH = 10;
    public static final int HEIGHT = 20;
    private int[][] board = new int[HEIGHT][WIDTH];
    private int currentPiece = -1;
    private int currentPieceX = -1;
    private int currentPieceY = -1;
    private int score = 0;
    private Random random = new Random();

    private int[][][] pieces = {
            {{1, 1, 1}, {0, 1, 0}}, // L piece
            {{0, 2, 2}, {2, 2, 0}}, // Z piece
            {{3, 3}, {3, 3}}, // O piece
            {{4, 4, 0}, {0, 4, 4}}, // S piece
            {{0, 5, 0, 0}, {0, 5, 0, 0}, {0, 5, 0, 0}, {0, 5, 0, 0}}, // I piece
            {{6, 6, 6}, {6, 0, 0}}, // J piece
            {{7, 7, 7}, {0, 0, 7}}, // T piece
    };

    private void printBoard() {
        for (int i = 0; i < HEIGHT; i++) {
            System.out.print("|");
            for (int j = 0; j < WIDTH; j++) {
                if (board[i][j] == 0) {
                    System.out.print(" ");
                } else if (board[i][j] == 1) {
                    System.out.print("X");
                } else if (board[i][j] == 2) {
                    System.out.print("O");
                } else if (board[i][j] == 3) {
                    System.out.print("#");
                } else if (board[i][j] == 4) {
                    System.out.print("+");
                } else if (board[i][j] == 5) {
                    System.out.print("*");
                } else if (board[i][j] == 6) {
                    System.out.print("!");
                } else if (board[i][j] == 7) {
                    System.out.print("@");
                }
            }
            System.out.println("|");
        }
        System.out.println("Score: " + score);
    }

    private void generateNewPiece() {
        currentPiece = random.nextInt(pieces.length);
        currentPieceX = WIDTH / 2 - pieces[currentPiece][0].length / 2;
        currentPieceY = 0;
        if (!canMovePieceDown()) {
            System.out.println("Game over!");
            System.exit(0);
        }
    }

    private boolean canMovePieceDown() {
        for (int i = 0; i < pieces[currentPiece].length; i++) {
            for (int j = 0; j < pieces[currentPiece][0].length; j++) {
                if (pieces[currentPiece][i][j] != 0) {
                    int y = currentPieceY + i + 1;
                    if (y >= HEIGHT || board[y][currentPieceX + j] != 0) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    private boolean movePieceDown() {
        if (canMovePieceDown(currentPiece, currentPieceX, currentPieceY + 1)) {
            currentPieceY++;
        } else {
            // Фиксируем фигуру на доске
            fixPieceOnBoard(currentPiece, currentPieceX, currentPieceY);
            // Удаляем заполненные линии и обновляем очки
            int linesCleared = clearLinesAndScore();
            // Создаем новую фигуру
            currentPiece = getNextPiece();
            currentPieceX = BOARD_WIDTH / 2 - 1;
            currentPieceY = 0;
            // Если новую фигуру невозможно поместить на доску, игра окончена
            if (!canMovePiece(currentPiece, currentPieceX, currentPieceY)) {
                gameOver = true;
            }
        }
        
        // Обновляем экран
        render();
    }
}
        
