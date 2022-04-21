precision mediump float;
varying vec2 vTexCoord;

#define iter 10
#define thresh 4.0

vec2 c;

uniform float alpha;
float A = 0.8;

float range = 2.0;

uniform float ratio;


float Julia(vec2 pos){
    vec2 z = pos;
    float i = 0.0;
    
    for(int j = 0; j < iter; j++){
        float x = z.x * z.x - z.y * z.y + c.x;
        z.y = 2.0 * z.x * z.y + c.y;
        z.x = x;
        i = float(j);

        if(length(z) > thresh){
            break;
        }
    }
    
    return i / float(iter);
}


void main()
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = vTexCoord;
    
    uv -= vec2(.5, .5);
    uv *= 3.0;

    uv.y *= ratio;
    
    //alpha = t;
    
    c = A * vec2(cos(alpha), sin(alpha));

    // Time varying pixel color
    vec3 col = Julia(uv) * vec3(.5, 1.0, 1.0);

    // Output to screen
    gl_FragColor = vec4(col, 1.0);
}