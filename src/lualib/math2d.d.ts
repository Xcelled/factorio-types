/** @noResolution */
declare module 'math2d' {
    namespace position {
        function ensure_xy(this: void, position: Position): PositionXY;
        function ensure_xy(this: void, position: Vector): VectorXY;

        function distance_squared(this: void, p1: Position, p2: Position): number;
        function distance(this: void, p1: Position, p2: Position): number;

        function rotate_vector(this: void, vector: Vector, angle_in_deg: number): Vector;

        function subtract(this: void, p1: Position, p2: Position): PositionXY;
        function add(this: void, p1: Position, p2: Position): PositionXY;

        function multiply_scalar(this: void, vec: Vector, scalar: number): VectorXY;
        function divide_scalar(this: void, vec: Vector, scalar: number): VectorXY;

        function vector_length(this: void, vec: Vector): number;
        function get_normalized(this: void, vec: Vector): VectorXY;
    }

    namespace bounding_box {
        function ensure_xy(this: void, bounding_box: BoundingBox): BoundingBox;
        function get_centre(this: void, box: BoundingBox): PositionXY;
        function contains_point(this: void, box: BoundingBox, point: Position): boolean;
        function contains_box(this: void, box: BoundingBox, other: BoundingBox): boolean;
        function collides_with(this: void, box1: BoundingBox, box2: BoundingBox): boolean;
        function create_from_centre(this: void, centre: Position, width: number, height: number): BoundingBoxXY;
    }
}
