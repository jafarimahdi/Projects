from turtle import Turtle

STARTING_POSITIONS = [(0, 0), (-20, 0), (-40, 0)]
STEPS = 15
UP = 90
DOWN = 270
RIGHT = 0
LEFT = 180


class Snake:

    def __init__(self):
        self.segments = []
        self.create_snake()  # it will run this method immediately in each object creation from class
        self.head = self.segments[0]

    # create and add segment to list
    def add_segment(self, position):
        new_segment = Turtle("square")
        new_segment.color("white")
        new_segment.penup()
        new_segment.goto(position)
        self.segments.append(new_segment)

    # connect the segment to end of the tail
    def concat_segment(self):
        self.add_segment(self.segments[-1].position())

    # create snake for the start
    def create_snake(self):
        for position in STARTING_POSITIONS:
            self.add_segment(position)

    def move(self):
        for item in range(len(self.segments)-1, 0, -1):
            new_x = self.segments[item - 1].xcor()
            new_y = self.segments[item - 1].ycor()
            self.segments[item].goto(new_x, new_y)
        self.head.forward(STEPS)

    # Condition for the game rules
    def up(self):
        if self.head.heading() != DOWN:
            self.head.setheading(UP)

    def down(self):
        if self.head.heading() != UP:
            self.head.setheading(DOWN)

    def right(self):
        if self.head.heading() != LEFT:
            self.head.setheading(RIGHT)

    def left(self):
        if self.head.heading() != RIGHT:
            self.head.setheading(LEFT)
