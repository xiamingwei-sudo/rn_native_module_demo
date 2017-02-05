/**
 * React Native study
 * Author: 夏明伟
 * GitHub:https://github.com/Come-Mile
 * Email:xiamwei@hotmail.com
 */


#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@interface Crop:NSObject<UIImagePickerControllerDelegate,UINavigationControllerDelegate>
-(instancetype)initWithViewController:(UIViewController *)vc;
typedef void(^PickSuccess)(NSDictionary *resultDic);
typedef void(^PickFailure)(NSString* message);
@property (nonatomic, retain) NSMutableDictionary *response;
@property (nonatomic,copy)PickSuccess pickSuccess;
@property (nonatomic,copy)PickFailure pickFailure;
@property(nonatomic,strong)UIViewController *viewController;

-(void)selectImage:(NSDictionary*)option successs:(PickSuccess)success failure:(PickFailure)failure;
@end
